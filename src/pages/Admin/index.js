import { Container, Title, Box} from "./styles";
import { employee } from "../../data/users";
import { IconButton } from "@mui/material";
import { Add, Edit } from "@mui/icons-material";


export default function Admin(){
    console.log()
    return (
       <Container>
           <Title>
                Funcionários
           </Title>

            <IconButton color="primary" aria-label="adicionar novo funcionario no sistema">
                <Add />
            </IconButton>
           <Box>
                {employee ? 
                 employee.map(item => (
                    <div key={item.id}>
                       <div>
                        <p>
                                Nome: {item.name}
                        </p>
                        <p>
                                E-mail: {item.email}
                        </p>
                       </div>
                       <IconButton color="primary" aria-label="editar informação usuário">
                        <Edit />
                       </IconButton>
                    </div>
                 ))
                : 
                    <p> Não possui funcionários cadastrados</p>
                }
           </Box>

            
       </Container>
    )
}
