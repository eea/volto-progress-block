import React from 'react';
import { Progress, Grid } from 'semantic-ui-react';

const widths = {
  one: {},
  two: {
    mobile: 12,
    tablet: 6,
    computer: 6,
    largeScreen: 6,
    widescreen: 6,
  },
  three: {
    mobile: 12,
    tablet: 4,
    computer: 4,
    largeScreen: 4,
    widescreen: 4,
  },
  four: {
    mobile: 12,
    tablet: 6,
    computer: 3,
    largeScreen: 3,
    widescreen: 3,
  },
};

const View = ({ data, mode }) => {
  const { items = [], gridSize = 'one' } = data;

  if (!items.length && mode === 'edit') return <p>Add Progress items</p>;
  return (
    <React.Fragment>
      <Grid columns={1}>
        {items.map((item, index) => {
          return (
            <Grid.Column
              key={`progress-item-${index}-${item.children}`}
              {...widths[gridSize]}
            >
              <Progress
                value={item.value}
                total={item.total || 100}
                progress={item.progress}
                indicating={item.indicating}
                success={item.state === 'success'}
                warning={item.state === 'warning'}
                error={item.state === 'error'}
                color={item.color || 'blue'}
              >
                {item.children}
              </Progress>
            </Grid.Column>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default View;
