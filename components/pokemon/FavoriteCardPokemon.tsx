import React, { FC } from 'react';
import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
    pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {

    const router = useRouter();

    //navegamos a la pantalla del detalla del pokemon
    const onFavoriteClicked = () => {
        router.push(`/pokemon/${pokemonId}`)
    }

    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId} onClick={onFavoriteClicked}>
            <Card hoverable clickable css={{ padding: 10 }}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                    width={'100%'}
                    height={140}
                />
            </Card>
        </Grid>
    )
}