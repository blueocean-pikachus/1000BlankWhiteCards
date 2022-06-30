import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

export default function MediaCard({ card }) {
  return !card ? null : (
    <Card
      component={'div'}
      sx={{
        maxWidth: 276,
        height: 439,
        marginRight: 5,
        marginBottom: 5,
        border: 'solid',
        borderRadius: 3,
        objectFit: 'scale-down',
        /*  height: 'fit-content' */
      }}
    >
      <CardMedia
        component="img"
        image={card.image}
        sx={{
          height: "fit-content",
          // width: "100",
          objectFit: "scale-down",
          // borderRadius: "20",
          // maxHeight: "1",
        }}
        alt="image of card"
      />
      <CardContent component={'div'}
        sx={{
          maxHeight: "130px",
          overflowY: "auto",
        }}
      // className="cactus"
      // class-name="cactus"
      // object-fit="scale-down"
      // border-radius="20"
      // height="fit-content"
      // maxHeight="1px"
      // // width="100"
      // maxWidth="1px"

      >
        <Typography gutterBottom variant="h5" component={"p"}>
          {card.points > 0 ? `+${card.points}` : `${card.points}`}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={'p'}>
          {card.cardRules ? `${card.cardRules}` : '-'}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={'p'}>
          {card.tags ? (card.tags.split(',')).map((tag) =>
            `#${tag.trim()}`) : '-'}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={'p'}>
          {card.createdBy ? card.createdBy : 'no creator'}
        </Typography>
      </CardContent>
    </Card>
  );
}
