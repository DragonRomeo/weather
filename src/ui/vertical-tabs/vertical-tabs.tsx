import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { IOption } from '../settings/settings.types';
import { TabPanel } from './tab-panel/tab-panel';

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

interface Props {
  options: Array<IOption>;
}

const VerticalTabs: React.FC<Props> = ({ options }) => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.inherit',
        display: 'flex',
        height: 224,
      }}
    >
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={() => handleChange}
        aria-label='Vertical tabs'
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {options.map((item, index) => (
          <Tab key={index} label={item.title} {...a11yProps(index)}></Tab>
        ))}
      </Tabs>
      {options.map((item, index) => (
        <TabPanel key={index} value={value} index={index}>
          {item.content}
        </TabPanel>
      ))}
    </Box>
  );
};

export default VerticalTabs;
