import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SignUp from './SignUpForm';
import Login from './LoginForm';


function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
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

export default function LoginTab() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box >
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor='inherit' centered sx={{
                    '& .MuiTabs-indicator': {
                        backgroundColor: '#A03037',
                    },

                }} >
                    <Tab label="Login" {...a11yProps(0)} sx={{ fontWeight: 'bold', fontSize: 'large', ':focus': { color: '#0A0102' } }} />
                    <Tab label="SignUp" {...a11yProps(1)} sx={{ fontWeight: 'bold', fontSize: 'large', ':focus': { color: '#0A0102' } }} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Login></Login>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <SignUp></SignUp>
            </CustomTabPanel>
        </Box>
    );
}