import React from 'react';
import Heading1 from '../components/views/util/Heading1';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp'; import NavBar from '../components/views/util/NavBar';
import ParagraphWithBackground from '../components/views/util/ParagraphWithBackground';
import TagChips from '../components/workshop/TagChips';
import WorkshopList from '../components/workshop/WorkshopList';
function Workshops() {
    const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return (
        <div>
            <NavBar />
            <div style={{ background: "#fff5f8", padding: "20px", marginTop: "65px" }}>
                <Heading1 data={{ heading: "Workshops" }} />
                <ParagraphWithBackground text={paragraph} />
                <TagChips />
                <WorkshopList />
                <div style={{ marginLeft: "73px" }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<GetAppIcon />}
                    >                    <a style={{textDecoration:"none",color:"black"}} download href={require('/assets/abc.pdf')}>

                            Download Paper Template
                                     </a>

                    </Button>
                </div>
            </div>

        </div>
    );
}

export default Workshops;
