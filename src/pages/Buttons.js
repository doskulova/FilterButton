import React, {useContext} from 'react';
import {CustomContext} from "../utils/context";
import {styled} from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Buttons(props) {
    const CardButton = styled(Button)({
        borderRadius:'12px' ,
        borderColor:'#6AA5FF',
        color:'#0C73FE'
    })

    const {changeCategory, changeLevel,rate} = useContext(CustomContext)


    return (
        <Box  sx={{ '& button': { m: 1 } }}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <CardButton variant="outlined" size="medium" value={rate} onClick={() => changeCategory('Пеший тур')}>Пеший тур</CardButton>
                <CardButton variant="outlined" size="medium" onClick={() => changeCategory('Конный тур')}>Конный тур</CardButton>
                <CardButton variant="outlined" size="medium" onClick={() => changeCategory('Велотур')}>Велотур</CardButton>
                <CardButton variant="outlined" size="medium" onClick={() => changeCategory('Джип тур')}>Джип тур</CardButton>
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <CardButton variant="outlined" size="medium"  onClick={() => changeLevel('Легкий')}>Легкий</CardButton>
                <CardButton variant="outlined" size="medium"  onClick={() => changeLevel('Средний')}>Средний</CardButton>
                <CardButton variant="outlined" size="medium"  onClick={() => changeLevel('Сложный')}>Сложный</CardButton>
                <CardButton variant="outlined" size="medium"  onClick={() => changeLevel('Экстремальный')}>Экстремальный</CardButton>
            </div>
        </Box>
    );
}

export default Buttons;