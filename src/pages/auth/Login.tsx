import { loginViaApi } from "../../api/auth";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login } from "../../features/auth/authSlices";
import { AuthenticationI } from "../../types/auth";

export default function Login() {
    const auth = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const api_key = e.currentTarget.apikey.value
        // dispatch(login(api_key))
        await loginViaApi(api_key)
        .then((res: AuthenticationI) => {
            console.table(res)
            if (res.success) {
                dispatch(login(api_key))
            } else {
                alert(res.status_message)
            }
        })


    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="apikey" type="apikey" placeholder="API KEY" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}