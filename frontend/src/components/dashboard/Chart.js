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
        width:"100%",
        height:"100%"
        
        
    },

}));

function Chart(props) {
  useEffect(() => {
    fetchWorkshops(dispatch);
  },[])
  //*********************************************CONSTANTS************************************************************* */
    const dispatch = useDispatch();
    const globalState = useSelector((state) => state);
    const workshops = globalState.workshop.workshops
    const classes = useStyles();
    const declined = workshops ? workshops.filter(res => res.state == AppConstants.STATE_DECLINED).length : null;
    const aproved = workshops ? workshops.filter(res => res.state == AppConstants.STATE_APPROVED).length : null;
    const requested = workshops ? workshops.filter(res => res.state == AppConstants.STATE_REQUESTED).length : null;


    let chartOptions2 = {
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
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(29,140,248,0.0)",
                zeroLineColor: "transparent"
              },
              ticks: {
                suggestedMin: 0,
                padding: 20,
                fontColor: "#9a9a9a"
              }
            }
          ],
          xAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(29,140,248,0.1)",
                zeroLineColor: "transparent"
              },
              ticks: {
                padding: 20,
                fontColor: "#9a9a9a"
              }
            }
          ]
        }
      };

    const chartReservationsOfRoomType = canvas => {
          let ctx = canvas.getContext("2d");
      
          let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      
          gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
          gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
          gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
      
          return {
            labels: ["Requested", "Approved", "Declined"],
            datasets: [
              {
                label: "Workshops",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: "#1f8ef1",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: "#1f8ef1",
                pointBorderColor: "rgba(255,255,255,0)",
                pointHoverBackgroundColor: "#1f8ef1",
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
                data: [requested,aproved,declined]
              }
            ]
          };
        }
    return (
        <div>
            <Card >
                <CardBody className={classes.chartCoverBody}>
                <div className="chart-area">
                  <Bar
                    data={chartReservationsOfRoomType}
                    options={chartOptions2}
                    height={400}
                  />
                  </div>

                </CardBody>
            </Card>
        </div>
    );
}



export default Chart;