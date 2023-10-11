const main = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return(
        <StyledHeader>
            <Toolbar style={{minHeight:55}}>
                <Component>
                    <img src ={logoURL} alt="logo" style={{width:75}} />
                    <Box style={{display:'flex'}}>
                        <Subheading>
                            Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
                        </Subheading>
                        <Plusimage src={subURL} alt="sub-logo" />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader> 
    )
}
export default main;