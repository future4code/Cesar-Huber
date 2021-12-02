// import React, { useEffect } from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';

// export default function MatchesList(props) {

//     useEffect(() => {
//         props.getMatches()
//     }, [])

//     return (
//         <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
//             {props.matchesList.map((item) => (
//                 <ImageListItem key={item.id}>
//                     <img
//                         src={`${item.photo}?w=161&fit=crop&auto=format`}
//                         srcSet={`${item.photo}?w=161&fit=crop&auto=format&dpr=2 2x`}
//                         alt={item.name}
//                         loading="lazy"
//                     />
//                     <p>{item.name}</p>
//                 </ImageListItem>
//             ))}
//         </ImageList>
//     );
// }

import React, { useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import styled from 'styled-components'

const MatchContainer = styled.div`
    min-width: 250px;
    max-width: 345px;
    height: 70px;
    border: 2px solid #77B154;
    border-radius: 10px;
    box-shadow: 3px 3px 3px #353535;
    display: flex;
    align-items: center;
`

export default function MatchesList(props) {

    useEffect(() => {
        props.getMatches()
    }, [])

    const renderedList = () => {
        return (
            props.matchesList.map((match) => {
               return (
                <MatchContainer>
                    <Avatar alt={match.name} src={match.photo} sx={{ margin: '0 10px', width: 56, height: 56 }} />
                    <p>{match.name}</p>
                </MatchContainer>
               )
            })
        )
    }

    return (
        <Stack direction="column" spacing={2} sx={{mt:'10px', width:'100%', height:'400px'}}>
            {renderedList()}
        </Stack>
    );
}
