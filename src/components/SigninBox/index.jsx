export default function SigninBox() {
    return (
        <div className="signinbox">
            <div className="signinbox__box text-center">
                <h1 >Login</h1>
                <p >You need have a Anilist account to signin</p>
                <a
                    className="signinbox__action"
                    target={'_blank'}
                    rel="noreferrer"
                    href='https://anilist.co/api/v2/oauth/authorize?client_id=8472&response_type=token'>
                    <button className="primary-btn">Login with AniList</button>
                </a>

                {/* <button>sign-up</button> */}
                <p >Doesn&lsquo;t have a account ? <a target={'_blank'} rel="noreferrer" href="https://anilist.co/signup">Register</a></p>
            </div>
            <div className="signinbox__nail"></div>
        </div>
    )
}
