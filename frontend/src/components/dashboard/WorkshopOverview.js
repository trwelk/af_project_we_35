import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import {useDispatch, useSelector} from 'react-redux'
import { Line, Bar, Pie } from "react-chartjs-2";
import {
    Card,
    CardHeader,
    CardBody,

} from "reactstrap";
import {fetchWorkshops} from '../../redux/actions/Wokshop.action'
import { AppConstants } from '../../redux/constants/constants';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    chartCoverBody: {
        background:"#00083f",
        width:"80%"
        
    },

}));

function WorkshopOverview(props) {
    const dispatch = useDispatch();
    const globalState = useSelector((state) => state);
    const workshops = globalState.workshop.workshops
    const classes = useStyles();

    useEffect(() => {
      fetchWorkshops(dispatch);
    },[])

    const declined = workshops ? workshops.filter(res => res.state == AppConstants.STATE_DECLINED).length : null;
    const aproved = workshops ? workshops.filter(res => res.state == AppConstants.STATE_APPROVED).length : null;
    const requested = workshops ? workshops.filter(res => res.state == AppConstants.STATE_REQUESTED).length : null;

    const chartReservationPlatform = {


        data: canvas => {
            let ctx = canvas.getContext("2d");

            let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

            gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
            gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
            gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

            return {
                labels: ["Declined", "Approved", "Requested"],
                datasets: [
                    {
                        label: "Platforms",
                        fill: true,
                        backgroundColor: gradientStroke,
                        hoverBackgroundColor: gradientStroke,
                        borderColor: "#d048b6",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: [declined, aproved, requested]
                    }
                ]
            };
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: "#f5f5f5",
                titleFontColor: "#333",
                bodyFontColor: "#666",
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [
                    {
                        gridLines: {
                            drawBorder: false,
                            color: "rgba(225,78,202,0.1)",
                            zeroLineColor: "transparent"
                        },
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 30,
                            padding: 20,
                            fontColor: "#9e9e9e"
                        }
                    }
                ],
                xAxes: [
                    {
                        gridLines: {
                            drawBorder: false,
                            color: "rgba(225,78,202,0.1)",
                            zeroLineColor: "transparent"
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9e9e9e"
                        }
                    }
                ]
            }
        }
    };

    return (
        <div>
            <Card >
                <CardBody className={classes.chartCoverBody}>
                    <div className="chart-area">
                        <Bar
                            data={chartReservationPlatform.data}
                            options={chartReservationPlatform.options}
                        />
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}



export default WorkshopOverview;