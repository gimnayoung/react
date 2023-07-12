import "../components/login.css";
function Login(){
    return(
        <>
        <div id="wrap">
            <form>
                <input type='email' placeholder='이메일 또는 전화번호'/>
                <input type='password' placeholder='비밀번호'/>
                <label for='remember-check'>
                    <input type='checkbox' id='remember-check'/>자동 로그인
                </label>
                <input type="submit" value='로그인' class="loginBut"/>
                <div class="forgetBox">
                    <a class="forgetID" href='#'>아이디찾기</a>
                    <a href='#'>비밀번호찾기</a>
                </div>
                <div class="signupBox">
                    <button class="signupBut">새 계정 만들기</button>
                </div>
            </form>
        </div>
        </>
    )
}
export default Login;