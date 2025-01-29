import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface PhotoCardProps {
  image: string;
  title: string;
  description: string;
  button1Label?: string;
  button2Label?: string;
}

export default function PhotoCard({
  image,
  title,
  description,
  button1Label = "Share",
  button2Label = "Learn More",
}: PhotoCardProps) {
  return (
    <Card sx={{ maxWidth: "100%", borderRadius:'0px' }}>
      <CardMedia
        sx={{ height: 340 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
{/*       <CardActions>
        <Button size="small">{button1Label}</Button>
        <Button size="small">{button2Label}</Button>
      </CardActions> */}
    </Card>
  );
}
