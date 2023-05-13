import ClientError from "./client-error";

export interface PixelResponse {
    success: boolean;
    error: ClientError | null;
    message: string;
}