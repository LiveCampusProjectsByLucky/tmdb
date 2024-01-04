import styled from "styled-components";
import { loginViaApi } from "../api/auth";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { login } from "../features/auth/authSlices";
import { AuthenticationI } from "../types/auth";
import colors from "../variables/colors";
import general from "../variables/general";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  // Redux
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  // States
  const navigate = useNavigate();

  // Handlers
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const api_key = e.currentTarget.apikey.value;

    await loginViaApi(api_key).then((res: AuthenticationI) => {
      console.table(res);
      if (res.success) {
        dispatch(login(api_key));
        navigate("/");
      } else {
        alert(res.status_message);
      }
    });
  };

  //   Render
  return (
    <AuthFormStyled>
      <div>Welcome to</div>
      <h1>
        TMBD <small>by Lucky Marty</small>
      </h1>
      <form onSubmit={handleSubmit}>
        <input name="apikey" type="apikey" placeholder="API KEY" />
        <button type="submit">Login</button>
      </form>
    </AuthFormStyled>
  );
}

// Style
const AuthFormStyled = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 50px;

    input {
      padding: 10px;
      border-radius: ${general.border.radius.lg};
      border: 1px solid #ccc;

      &:focus {
        outline: none;
        border-color: ${colors.darkgreen};
      }
    }

    button {
      all: unset;
      text-align: center;
      padding: 10px;
      border-radius: ${general.border.radius.full};
      color: ${colors.white};
      background: ${colors.darkgreen};
    }
  }
`;
