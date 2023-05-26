import { Card, CardLink, Container, Redirect, Button } from "./styles"
import { useForm } from "react-hook-form";
import { TextField } from "../../components";

export default function Login(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <Container>
            <Card>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        label={"E-mail"}
                        register={register}
                        name={"email"}
                        errors={errors}
                        msgError={"Campo obrigatório"}
                        required
                        type="email"
                        placeholder="exemplo@gmail.com"
                    />
                       <TextField
                        label={"Senha"}
                        register={register}
                        name={"password"}
                        errors={errors}
                        msgError={"Campo obrigatório"}
                        required
                        type="password"
                        placeholder="Informe sua senha"
                    />

                    <CardLink>
                        <Redirect href="/"> Recuperar Senha </Redirect>
                        <Redirect href="/"> Continuar sem login </Redirect>
                    </CardLink>

                    <Button type="submit"> Entrar </Button>
                </form>
            </Card>
        </Container>
    );
}