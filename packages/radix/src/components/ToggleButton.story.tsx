import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Text } from './Text';
import { ToggleButtonGroup, ToggleButton } from './ToggleButton';
import { Tooltip } from './Tooltip';
import { TextAlignLeftIcon, TextAlignCenterIcon, TextAlignRightIcon } from '@modulz/radix-icons';

function ToggleButtonGroupStory() {
  const [value, setValue] = useState('center');

  return (
    <>
      <Box width="135px" my={6}>
        <ToggleButtonGroup size={0} value={value} onChange={value => setValue(value)}>
          <ToggleButton value="left">
            <TextAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center">
            <TextAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right">
            <TextAlignRightIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box width="135px" my={6}>
        <ToggleButtonGroup size={0} value={value} onChange={value => setValue(value)}>
          <ToggleButton value="left">Left</ToggleButton>
          <ToggleButton value="center">Center</ToggleButton>
          <ToggleButton value="right">Right</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box width="135px" my={6}>
        <ToggleButtonGroup
          size={0}
          variant="fade"
          value={value}
          onChange={value => setValue(value)}
        >
          <ToggleButton value="left">Left</ToggleButton>
          <ToggleButton value="center">Center</ToggleButton>
          <ToggleButton value="right">Right</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box width="180px" my={6}>
        <ToggleButtonGroup value={value} onChange={value => setValue(value)}>
          <ToggleButton value="left">
            <TextAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center">
            <TextAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right">
            <TextAlignRightIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box width="180px" my={6}>
        <ToggleButtonGroup value={value} onChange={value => setValue(value)}>
          <ToggleButton value="left">Left</ToggleButton>
          <ToggleButton value="center">Center</ToggleButton>
          <ToggleButton value="right">Right</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box width="180px" my={6}>
        <ToggleButtonGroup variant="fade" value={value} onChange={value => setValue(value)}>
          <ToggleButton variant="fade" value="left">
            Left
          </ToggleButton>
          <ToggleButton variant="fade" value="center">
            Center
          </ToggleButton>
          <ToggleButton variant="fade" value="right">
            Right
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box width="180px" my={6}>
        <Text size={1} my={1} as="p">
          With Tooltip
        </Text>
        <ToggleButtonGroup value={value} onChange={value => setValue(value)}>
          <Tooltip label="Left" align="center">
            <ToggleButton value="left">Left</ToggleButton>
          </Tooltip>
          <Tooltip label="Center" align="center">
            <ToggleButton value="center">Center</ToggleButton>
          </Tooltip>
          <Tooltip label="Right" align="center">
            <ToggleButton value="right">Right</ToggleButton>
          </Tooltip>
        </ToggleButtonGroup>
      </Box>
    </>
  );
}

storiesOf('Components|ToggleButton', module).add('default', () => <ToggleButtonGroupStory />);
