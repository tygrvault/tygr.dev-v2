import { AiFillGithub, AiOutlineTwitter, AiFillMail } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full gap-16 px-3 my-32 sm:gap-6 md:gap-4 lg:gap-2 sm:px-6">
        <div className="flex flex-col items-center max-w-[1400px] w-full justify-center md:justify-between gap-4 md:gap-6 lg:gap-8 text-center sm:text-left sm:flex-row xs:gap-2">
          <div className="flex flex-col items-center justify-center gap-6 p-4 sm:items-start sm:justify-start">
            <div className="flex flex-col gap-2">
              <small className="text-lg translate-y-2 xl:text-lg text-primary-500">
                tygerxqt • they/him
              </small>
              <h1 className="text-4xl font-black sm:text-5xl md:text-6xl lg:text-6xl">
                A professional idiot.
              </h1>
              <p className="font-semibold text-md sm:text-lg md:text-xl lg:text-2xl text-primary-500">
                Founder of Nord Studio & Lofu Studio.
              </p>
            </div>
            <div className="flex flex-row items-center justify-center w-full gap-4 sm:justify-start sm:items-start sm:flex-row">
              <Link href="https://github.com/tygerxqt">
                <Button theme="primary" size="sm" className="flex flex-row items-center">
                  <AiFillGithub className="w-4 h-4 mr-2" />
                  Github
                </Button>
              </Link>
              <Link href="https://twitter.com/tygerxqt">
                <Button theme="primary" size="sm" className="flex flex-row items-center">
                  <AiOutlineTwitter className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
              </Link>
              <Link href="mailto:hi@tygr.dev">
                <Button theme="primary" size="sm" className="flex flex-row items-center">
                  <AiFillMail className="w-4 h-4 mr-2" />
                  Email
                </Button>
              </Link>
            </div>
          </div>
          <Image alt="Logo" src={"https://secure.gravatar.com/avatar/871c2885d0acbbc08be33547816255e3?size=448"} width={448} height={0} priority className="hidden w-48 h-48 border rounded-full sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-fit xl:h-fit border-black/10 dark:border-white/10 md:block" />
        </div>
      </div>
    </>
  )
}
