import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AllPhotos from './Allphotos';
import Architecture from './Architecture';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{ color:"#6F7378"}}>
          <Tab label="All Photos" {...a11yProps(0)} style={{ color:"#6F7378"}}/>
          <Tab label="Architecture" {...a11yProps(1)} style={{ color:"#6F7378"}}/>
          <Tab label="Kashmir" {...a11yProps(2)} style={{ color:"#6F7378"}}/>
          <Tab label="Seaside" {...a11yProps(3)} style={{ color:"#6F7378"}}/>
          <Tab label="Lakeview" {...a11yProps(4)} style={{ color:"#6F7378"}}/>
          <Tab label="Italy" {...a11yProps(5)} style={{ color:"#6F7378"}}/>
          <Tab label="China" {...a11yProps(6)} style={{ color:"#6F7378"}}/>
          <Tab label="Argentina" {...a11yProps(7)} style={{ color:"#6F7378"}}/>
          <Tab  label="+New Category" {...a11yProps(8)} style={{marginLeft: "25%",color:"#6F7378", background:"#323337", borderRadius:"300px"}} />
          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AllPhotos/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Architecture/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Kashmir
      </TabPanel>
      <TabPanel value={value} index={3}>
        Seaside
      </TabPanel>
      <TabPanel value={value} index={4}>
        Lakeview
      </TabPanel>
      <TabPanel value={value} index={5}>
        Italy
      </TabPanel>
      <TabPanel value={value} index={6}>
        China
      </TabPanel>
      <TabPanel value={value} index={7}>
        Argentina
      </TabPanel>
      <TabPanel value={value} index={8}>
        New Category
      </TabPanel>
    </Box>
  );
}
