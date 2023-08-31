import {
    Grid,
    Button,
    Card,
    CardActions,
    CardContent,
    Typography
} from '@mui/material'

import { formatCEP } from '../../Address/util/formatFunction'

interface IInfoAddressProps {
    label: string
    value: string
}

const InfoAddress: React.FC<IInfoAddressProps> = ({ label, value }) => (
    <Typography variant='h6' fontSize={15} noWrap textOverflow='ellipsis'>
        <strong>{label}: </strong> {value}
    </Typography>
)

interface IAddressSelectCardProps {
    id: number
    street: string
    number: string
    city: string
    state: string
    cep: string
    neighborhood: string
    selected: boolean
    handleAddress: (idAddress: string) => void
}

export const AddressSelectCard: React.FC<IAddressSelectCardProps> = ({ id, street, number, city, state, cep, neighborhood, selected, handleAddress }) => {

    return (
        <Grid container item xs={12} sm={6} lg={4} xl={3} justifyContent='center'>
            <Card sx={{ width: 260 }}>
                <CardContent>
                    <InfoAddress label='Logradouro' value={street} />
                    <InfoAddress label='Número' value={number} />
                    <InfoAddress label='Cidade' value={city} />
                    <InfoAddress label='Estado' value={state} />
                    <InfoAddress label='CEP' value={formatCEP(cep)} />
                    <InfoAddress label='Bairro' value={neighborhood} />
                </CardContent>
                <CardActions onClick={() => handleAddress(String(id))}>
                    <Button variant={(selected ? 'contained' : 'outlined')} size="small">
                        {(selected ? 'Selecionado' : 'Entregar aqui')}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}