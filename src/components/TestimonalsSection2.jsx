import { East } from '@mui/icons-material';

import React from 'react';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import testimonialImage from '../assets/testimonialImage3.png';
import Sampleicon1 from '../assets/sampleicon1.png';
import Sampleicon2 from '../assets/sampleicon2.png';
import Sampleicon3 from '../assets/sampleicon3.png';
import Sampleicon4 from '../assets/sampleicon4.png';
import Sampleicon5 from '../assets/sampleicon5.png';
import Sampleicon6 from '../assets/sampleicon6.png';
const TestimonalsSection2 = () => {
  return (
    <Box 
            sx={{ 
                flexGrow: 1, 
                // width:'1440px',
                // height: '390px', 
                // marginTop: { xs: '20px', sm: '30px' },
                padding: { xs: '0 16px', sm: '0 32px' },
                fontFamily: 'Inter, sans-serif',
                backgroundColor:'#F5F7FA'
                
                
            }}
        >
            <Grid container spacing={2} columns={12} alignItems="center" paddingLeft={6} paddingRight={4}>
                {/* Image Section */}
                <Grid 
                    item 
                    xs={12} 
                    sm={5} 
                    md={4}
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'center', sm: 'flex-start' }, // Center image on mobile
                        marginTop: { xs: '10px', sm: '0' }, // Adjust margin for mobile
                        marginLeft:'14px'
                    }}
                >
                    <img 
                        src={testimonialImage}
                        alt="" 
                        style={{
                            maxWidth: '326px', // Make the image responsive
                            height: '326px'
                        }} />
                </Grid>

                {/* Text Section */}
                <Grid 
                    item 
                    xs={12} 
                    sm={5} 
                    md={6}
                    sx={{
                        // marginTop: { xs: '20px', sm: '0' }, // Adjust margin for mobile
                        paddingLeft: { sm: '150px' }, // Add padding on larger screens
                    }}
                    // xs={{alignItems:"center"}}
                ><Box  
                xs={{alignItems:"center"}}
                sx={{width:'100%',height:'auto'}}>
                    <Box sx={{width:'100%',height:'auto'}}
                     xs={4} sm={2} md={1} textAlign="center">
                        <div style={{
                            textAlign: 'left', 
                            fontSize: '1rem', // Adjust font size for responsiveness
                            width: '100%', 
                        }}>
                            
                            <p style={{ 
    color: 'gray', 
    textAlign: 'left', 
    fontSize: '1rem', // Adjust font size for responsiveness
    margin: '10px 0',
    lineHeight: '1.6' // Adjust this value for line spacing
}}>
    Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
    massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
    In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus.
    In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
    commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis 
    libero. Donec consectetur faucibus ipsum id gravida.
</p>

                            <h1 xs={4} textAlign="center" style={{ margin: '10px 0' ,color:"#4CAF4F"}}>
                                Tim Smith 
                            </h1>
                            < p style={{ margin: '10px 0',color:"gray" }}>
                                British dragon Boat Racing Association
                            </p>
                            
                        </div>
                    </Box>
                    <Box 
                    xs={4} sm={2} md={1} alignItems="center"
                                display='flex'                               
                                sx={{ 
                                    // flexDirection: { xs: 'column', sm: 'row' }, // Stack items on mobile
                                    alignItems: { xs: 'center', sm: 'flex-start' },
                                }}
                            >
                                <Box 
                                 
                                 display="grid" gridTemplateColumns="repeat(12, 1fr)" 
                                gap={2} sx={{ alignContent: 'center', width: '100%' }}> 
                            <Box gridColumn="span 2">
                                <img src={Sampleicon1} alt="" style={{ maxWidth: '100%' }} />
                            </Box> 
                            <Box gridColumn="span 2">
                                <img src={Sampleicon2} alt="" style={{ maxWidth: '100%' }} />
                            </Box>
                            <Box gridColumn="span 2">
                                <img src={Sampleicon3} alt="" style={{ maxWidth: '100%' }} />
                            </Box>
                            <Box gridColumn="span 2">
                                <img src={Sampleicon4} alt="" style={{ maxWidth: '100%' }} />
                            </Box>
                            <Box gridColumn="span 2">
                                <img src={Sampleicon5} alt="" style={{ maxWidth: '100%' }} />
                            </Box>
                            <Box gridColumn="span 2">
                                <img src={ Sampleicon6} alt="" style={{ maxWidth: '100%' }} />
                            </Box>
                        </Box>
                                <Box 
                                xs={12}
                                    sx={{ 
                                        display: 'flex', 
                                        alignItems: 'center',
                                        marginLeft: { sm: '2px' }
                                    }}
                                >
                                    <Button sx={{ color: 'green', whiteSpace: 'nowrap', textTransform: 'none' }}>Meet All Customers</Button>
                                    <East fontSize="large" sx={{ color: 'green', marginLeft: '5px' }} />
                                </Box>
                            </Box>
                        </Box>
                </Grid>
            </Grid>
        </Box>
  )
}

export default TestimonalsSection2
