/* eslint-disable react/prop-types */
import { Button, Card, CardBody } from '@nextui-org/react';
import { ThumbDownIkon, ThumbUpIkon } from '../ikons';
import './joke.scss';

export const Joke = ({ setup, punchline, showRating }) => (
  <Card>
    <CardBody>
      <div className="joke">
        <div className="joke__body">
          <p className="joke__body__setup">{setup}</p>
          <p className="joke__body__punchline">{`>> ${punchline}`}</p>
        </div>
        {showRating && (
          <div className="joke__rating">
            <Button variant='light' color='primary' isIconOnly>
              <ThumbUpIkon />
            </Button>
            <Button variant='light' color='secondary' isIconOnly>
              <ThumbDownIkon />
            </Button>
          </div>
        )}
      </div>
    </CardBody>
  </Card>
);
