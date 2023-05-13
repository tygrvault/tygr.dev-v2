"use client";

import ClientError from "@/types/client-error";
import React, { useCallback, useEffect } from "react";
import pb from "@/lib/pocketbase";
import { PixelResponse } from "@/types/response";

export interface AuthSession {
    authStore: typeof pb.authStore;

    user: typeof pb.authStore.model;
    loggedIn: typeof pb.authStore.isValid;

    avatar: string;
    banner: string;

    logIn: (email: string, password: string) => Promise<void | PixelResponse>;
    logOut: () => void;
    register: (
        name: string,
        username: string,
        email: string,
        password: string,
        passwordConfirm: string,
    ) => Promise<void>;
    update: () => Promise<void | PixelResponse>;

    resetPassword: (email: string) => void | PixelResponse;
    changePassword: (oldPassword: string, newPassword: string, newPasswordConfirm: string) => void | PixelResponse;
    requestEmailChange: (newEmail: string) => void | PixelResponse;

    uploadAvatar: (file: File) => Promise<void | PixelResponse>;
    removeAvatar: () => Promise<void | PixelResponse>;

    uploadBanner: (file: File) => Promise<void | PixelResponse>;
    removeBanner: () => Promise<void | PixelResponse>;

    deleteAccount: () => Promise<void | PixelResponse>;
}

export const AuthContext = React.createContext<AuthSession>({
    authStore: pb.authStore,

    user: pb.authStore.model,
    loggedIn: pb.authStore.isValid,

    avatar: pb.authStore.model?.avatar ?
        `${process.env.NEXT_PUBLIC_AUTH_URL}/api/files/_pb_users_auth_/${pb.authStore.model.id}/${pb.authStore.model.avatar}` :
        `${process.env.NEXT_PUBLIC_URL}/assets/auth/avatar.jpg`,

    banner: pb.authStore.model?.banner ?
        `${process.env.NEXT_PUBLIC_AUTH_URL}/api/files/_pb_users_auth_/${pb.authStore.model.id}/${pb.authStore.model.banner}` :
        `${process.env.NEXT_PUBLIC_URL}/assets/auth/banner.jpg`,

    logIn: async () => { },
    logOut: () => { return { success: false, error: null, message: "" } },
    register: async () => { },
    update: async () => { },

    resetPassword: () => { return { success: false, error: null, message: "" } },
    changePassword: () => { return { success: false, error: null, message: "" } },
    requestEmailChange: () => { return { success: false, error: null, message: "" } },

    uploadAvatar: async () => { return { success: false, error: null, message: "" } },
    removeAvatar: async () => { return { success: false, error: null, message: "" } },

    uploadBanner: async () => { return { success: false, error: null, message: "" } },
    removeBanner: async () => { return { success: false, error: null, message: "" } },

    deleteAccount: async () => { return { success: false, error: null, message: "" } },
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    // Wait for the client to be mounted before rendering the children.
    const [mounted, setMounted] = React.useState(false);

    const [loggedIn, setLoggedIn] = React.useState(pb.authStore.isValid);
    const [user, setUser] = React.useState(pb.authStore.model);
    const [avatar, setAvatar] = React.useState(pb.authStore.model?.avatar ?
        `${process.env.NEXT_PUBLIC_AUTH_URL}/api/files/_pb_users_auth_/${pb.authStore.model.id}/${pb.authStore.model.avatar}` :
        `${process.env.NEXT_PUBLIC_URL}/assets/auth/avatar.jpg`);

    const [banner, setBanner] = React.useState(pb.authStore.model?.banner ?
        `${process.env.NEXT_PUBLIC_AUTH_URL}/api/files/_pb_users_auth_/${pb.authStore.model.id}/${pb.authStore.model.banner}` :
        `${process.env.NEXT_PUBLIC_URL}/assets/auth/banner.jpg`);

    const logIn = async (email: string, password: string) => {
        pb.collection("users").authWithPassword(email, password).then((record) => {
            setLoggedIn(true);
            setUser(pb.authStore.model);
            return {
                success: true,
                error: null,
                message: "Successfully logged in."
            };
        }).catch((err: ClientError) => {
            let title = "Invalid ";
            if (err.response.message === "Failed to authenticate.") title += "credentials."
            if (!err.response.data) return { success: false, error: err, message: err.response.message };
            if (err.response.data.identity && err.response.data.identity.code === "validation_required") title += "email"
            if (err.response.data.password && err.response.data.password.code === "validation_required") title.length <= 8 ? title += "password." : title += " and password."

            return {
                success: false,
                error: err,
                message: title
            }
        });
    }

    const logOut = () => {
        setUser(null);
        pb.authStore.clear();
        return {
            success: true,
            error: null,
            message: "Logged out successfully."
        }
    }

    const register = async (
        name: string,
        username: string,
        email: string,
        password: string,
        passwordConfirm: string,
    ) => {
        async function createUser() {
            if (!name || name.length < 2) return { success: false, error: null, message: "Please enter a valid name with at least 2 characters." };
            if (!username || username.length < 2) return { success: false, error: null, message: "Please enter a valid username with at least 2 characters." };
            if (!email || !email.includes("@")) return { success: false, error: null, message: "Please enter a valid email." };
            if (!password || password.length < 8 || password.length > 72) return { success: false, error: null, message: "Please enter a valid password between 3 and 72 characters." };
            if (password !== passwordConfirm) return { success: false, error: null, message: "The passwords don't match. Please try again." };

            await pb.collection("users").create({
                name,
                username,
                email,
                password,
                passwordConfirm
            }).then(async () => {
                await pb.collection("users").requestVerification(email);
                return {
                    success: true,
                    error: null,
                    message: "Please check your email for a verification link. If you don't see it, check your spam folder."
                }
            }).catch((err: ClientError) => {
                if (err.response.data) {
                    let e = Object.values(err.response.data)[0];

                    return {
                        success: false,
                        error: err,
                        message: e
                    }
                }
            });
        }

        await createUser();
    }

    async function update() {
        await pb.collection("users").authRefresh().then((response) => {
            setUser(response.record);
            setAvatar(response.record?.avatar ?
                `${process.env.NEXT_PUBLIC_AUTH_URL}/api/files/_pb_users_auth_/${response.record.id}/${response.record.avatar}` :
                `${process.env.NEXT_PUBLIC_URL}/assets/auth/avatar.jpg`);

            setBanner(response.record?.banner ?
                `${process.env.NEXT_PUBLIC_AUTH_URL}/api/files/_pb_users_auth_/${response.record.id}/${response.record.banner}` :
                `${process.env.NEXT_PUBLIC_URL}/assets/auth/banner.jpg`);
        }).catch((err) => {
            console.error(err);
        })
    }

    function resetPassword(email: string) {
        pb.collection("users").requestPasswordReset(email).then((data) => {
            return {
                success: true,
                error: null,
                message: "If your email is registered, you should receive an email shortly."
            }
        }).catch((err: ClientError) => {
            return {
                success: false,
                error: err,
                message: "An invalid email was provided. Please try again."
            }
        });
    }

    function changePassword(oldPassword: string, newPassword: string, newPasswordConfirm: string) {
        const formData = new FormData();
        formData.append("oldPassword", oldPassword);
        formData.append("password", newPassword);
        formData.append("passwordConfirm", newPasswordConfirm);

        pb.collection("users").update(user?.id as string, formData).then(() => {
            // TODO: Add an alert here.
            setUser(null);
            pb.authStore.clear();
        }).catch((err) => {
            console.error(err);
            return {
                success: false,
                error: err,
                message: "An error occurred. Check the console."
            }
        });
    }

    function requestEmailChange(newEmail: string) {
        pb.collection("users").requestEmailChange(newEmail).then((data) => {
            return {
                success: true,
                error: null,
                message: "Check your new email for a verification link."
            }
        }).catch((err: ClientError) => {
            return {
                success: false,
                error: err,
                message: "Failed to send email. Please try again."
            }
        });
    }



    async function uploadAvatar(file: File) {
        const formData = new FormData();
        formData.append("avatar", file);

        pb.collection("users").update(pb.authStore.model?.id as string, formData).then((data) => {
            setAvatar(`${process.env.NEXT_PUBLIC_AUTH_URL}/api/files/_pb_users_auth_/${data.id}/${data.avatar}`);
            return {
                success: true,
                error: null,
                message: "Successfully uploaded avatar."
            }
        }).catch((err) => {
            console.error(err);
            return {
                success: false,
                error: err,
                message: "Failed to upload avatar. Please try again later."
            }
        });
    }

    async function removeAvatar() {
        pb.collection("users").update(pb.authStore.model?.id as string, { avatar: null }).then((data) => {
            setAvatar(`${process.env.NEXT_PUBLIC_URL}/assets/auth/avatar.jpg`);
            return {
                success: true,
                error: null,
                message: "Successfully removed avatar."
            }
        }).catch((err) => {
            console.error(err);
            return {
                success: false,
                error: err,
                message: "Failed to remove avatar. Please try again later."
            }
        });
    }

    async function uploadBanner(file: File) {
        const formData = new FormData();
        formData.append("banner", file);

        pb.collection("users").update(pb.authStore.model?.id as string, formData).then((data) => {
            setBanner(`${process.env.NEXT_PUBLIC_AUTH_URL}/api/files/_pb_users_auth_/${data.id}/${data.banner}`);
            return {
                success: true,
                error: null,
                message: "Successfully uploaded banner."
            }
        }).catch((err) => {
            console.error(err);
            return {
                success: false,
                error: err,
                message: "Failed to upload banner. Please try again later."
            }
        });
    }

    async function removeBanner() {
        pb.collection("users").update(pb.authStore.model?.id as string, { banner: null }).then((data) => {
            setBanner(`${process.env.NEXT_PUBLIC_URL}/assets/auth/banner.jpg`);
            return {
                success: true,
                error: null,
                message: "Successfully removed banner."
            }
        }).catch((err) => {
            console.error(err);
            return {
                success: false,
                error: err,
                message: "Failed to remove banner. Please try again later."
            }
        });
    }

    const deleteAccount = useCallback(async () => {
        pb.collection("users").delete(pb.authStore.model?.id as string).then(() => {
            logOut();
            return {
                success: true,
                error: null,
                message: "Successfully deleted account. We'll miss you!"
            }
        }).catch((err) => {
            console.error(err);
            return {
                success: false,
                error: err,
                message: "Failed to delete account. Please try again later."
            }
        });
    }, []);

    useEffect(() => {
        setMounted(true);

        if (pb.authStore.model && pb.authStore.isValid) {
            pb.collection("users").subscribe(pb.authStore.model.id, (res) => {
                // If email has changed, the cookie is invalidated and the user is logged out.
                if (res.record.email !== user?.email) {
                    setUser(null);
                    pb.authStore.clear();
                    // TODO: Add an alert here to notify the user that their email has changed and that they need to login again.
                }
                update();
            });
        }

        setLoggedIn(pb.authStore.isValid);
        setUser(pb.authStore.model);

        setAvatar(pb.authStore.model?.avatar ?
            `${process.env.NEXT_PUBLIC_AUTH_URL}/api/files/_pb_users_auth_/${pb.authStore.model.id}/${pb.authStore.model.avatar}` :
            `${process.env.NEXT_PUBLIC_URL}/assets/auth/avatar.jpg`);

        setBanner(pb.authStore.model?.banner ?
            `${process.env.NEXT_PUBLIC_AUTH_URL}/api/files/_pb_users_auth_/${pb.authStore.model.id}/${pb.authStore.model.banner}` :
            `${process.env.NEXT_PUBLIC_URL}/assets/auth/banner.jpg`);

        return () => {
            pb.collection("users").unsubscribe("*");
            setMounted(false);
        }

        // Ignoring the line with reason: isValid is used to re-run the effect after every re-render of the component.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pb.authStore.isValid]);

    const value = React.useMemo(() => ({
        authStore: pb.authStore,

        user,
        avatar,
        banner,
        loggedIn,

        logIn,
        logOut,
        register,
        update,

        resetPassword,
        changePassword,
        requestEmailChange,

        uploadAvatar,
        removeAvatar,

        uploadBanner,
        removeBanner,
        deleteAccount
    }), [avatar, banner, deleteAccount, loggedIn, user]);

    return (
        <>
            <AuthContext.Provider value={value}>
                {mounted && children}
            </AuthContext.Provider>
        </>
    );
};

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
}