import bgImgauth from '../assets/background-auth.4bcf3f4b.jpg'

const Login = () => {
    return (
        <>
            <div className="relative flex min-h-full justify-center md:px-12 lg:px-0">
                <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28">
                    <main className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
                        <div className="flex">
                            <a href="/" aria-label="Home">
                                <svg aria-hidden="true" viewBox="0 0 109 40" className="h-10 w-auto">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Zm20 16c-7.264 0-13.321-5.163-14.704-12.02C4.97 22.358 6.343 21 8 21h24c1.657 0 3.031 1.357 2.704 2.98C33.32 30.838 27.264 36 20 36Z" fill="#2563EB"></path>
                                    <path d="M55.528 26.57V15.842H52V13.97h9.108v1.872h-3.636V26.57h-1.944Z" fill="#0F172A"></path>
                                    <path d="M83.084 26.57v-12.6h5.346c.744 0 1.416.18 2.016.54a3.773 3.773 0 0 1 1.44 1.44c.36.612.54 1.302.54 2.07 0 .78-.18 1.482-.54 2.106a4 4 0 0 1-1.44 1.494c-.6.36-1.272.54-2.016.54h-2.646v4.41h-2.7Zm2.664-6.84h2.376c.288 0 .546-.072.774-.216.228-.156.408-.36.54-.612a1.71 1.71 0 0 0 .216-.864c0-.324-.072-.606-.216-.846a1.394 1.394 0 0 0-.54-.576 1.419 1.419 0 0 0-.774-.216h-2.376v3.33ZM106.227 26.57V13.25h2.556v13.32h-2.556Z" fill="#2563EB"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M95.906 26.102c.636.432 1.35.648 2.142.648.444 0 .864-.066 1.26-.198a4.25 4.25 0 0 0 1.062-.558 3.78 3.78 0 0 0 .702-.668v1.244h2.574v-9.522h-2.538v1.248a3.562 3.562 0 0 0-.648-.672 3.13 3.13 0 0 0-1.026-.558 3.615 3.615 0 0 0-1.278-.216c-.828 0-1.566.216-2.214.648-.648.42-1.164 1.002-1.548 1.746-.372.732-.558 1.578-.558 2.538 0 .96.186 1.812.558 2.556.372.744.876 1.332 1.512 1.764Zm4.104-1.908c-.36.228-.78.342-1.26.342-.468 0-.882-.114-1.242-.342a2.387 2.387 0 0 1-.828-.954c-.204-.42-.306-.906-.306-1.458 0-.54.102-1.014.306-1.422.204-.408.48-.726.828-.954.36-.24.774-.36 1.242-.36.48 0 .9.12 1.26.36.36.228.636.546.828.954.204.408.306.882.306 1.422 0 .552-.102 1.038-.306 1.458a2.218 2.218 0 0 1-.828.954Z" fill="#2563EB"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="m76.322 23.197 2.595 3.373h2.268l-3.662-4.787 3.338-4.663h-2.196l-2.162 3.334-2.554-3.334h-2.34l3.652 4.71-3.634 4.74h2.196l2.5-3.373ZM62.738 26.102a3.78 3.78 0 0 0 2.142.648c.456 0 .888-.072 1.296-.216.42-.144.798-.336 1.134-.576a3.418 3.418 0 0 0 .864-.835v1.447h1.872v-9.45h-1.872v1.45a3.118 3.118 0 0 0-.72-.82 3.2 3.2 0 0 0-1.062-.612 4.033 4.033 0 0 0-1.35-.216c-.828 0-1.578.21-2.25.63-.66.42-1.188 1.002-1.584 1.746-.384.732-.576 1.572-.576 2.52 0 .936.192 1.776.576 2.52.384.744.894 1.332 1.53 1.764Zm4.122-1.476c-.432.276-.93.414-1.494.414a2.682 2.682 0 0 1-1.476-.414 2.987 2.987 0 0 1-1.008-1.134c-.24-.492-.36-1.05-.36-1.674 0-.612.12-1.158.36-1.638.252-.48.588-.858 1.008-1.134a2.682 2.682 0 0 1 1.476-.414c.564 0 1.062.138 1.494.414.432.276.768.654 1.008 1.134.252.48.378 1.026.378 1.638 0 .624-.126 1.182-.378 1.674-.24.48-.576.858-1.008 1.134Z" fill="#0F172A"></path>
                                </svg>
                            </a>
                        </div>
                        <h2 className="mt-20 text-lg font-semibold text-gray-900">Sign in to your account</h2>
                        <p className="mt-2 text-sm text-gray-700">Don&apos;t have an account? <a href="/register" className="font-medium text-blue-600 hover:underline">Sign up</a> for a free trial.
                        </p>
                        <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
                            <div>
                                <label htmlFor=":S1:" className="mb-3 block text-sm font-medium text-gray-700">Email address</label>
                                <input id=":S1:" type="email" autoComplete="email" required className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm" name="email" />
                            </div>
                            <div>
                                <label htmlFor=":S2:" className="mb-3 block text-sm font-medium text-gray-700">Password</label>
                                <input id=":S2:" type="password" autoComplete="current-password" required className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm" name="password" />
                            </div>
                            <div>
                                <button className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full" type="submit">Sign in</button>
                            </div>
                        </form>
                    </main>
                </div>
                <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
                    <img loading="lazy" width="1664" height="1866" decoding="async" data-nimg="1" className="absolute inset-0 h-full w-full object-cover" src={bgImgauth} />
                </div>
            </div>
        </>
    )
}

export default Login