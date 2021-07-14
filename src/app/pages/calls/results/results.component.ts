import { Component, OnInit } from '@angular/core';
import { APPGGElementsCallsRS } from '../../../models/calls-rs/calls-rs.model';
import * as _ from 'lodash';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'appgg-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class APPGGResultsComponent implements OnInit {

  call: APPGGElementsCallsRS;
  options: any[] = new Array<any>();
  textProperty: string;
  state$: Observable<object>;
  stateSubscription: Subscription;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state));

    this.stateSubscription = this.state$
      .subscribe((_data: any) => {
        if (_data && _data.call) {
          this.call = _data.call;
          const clusteredCounting = _.groupBy(this.call.counting, 'idProposal');
          const countingValues = Object.keys(clusteredCounting)
            .map(key => clusteredCounting[key]);
          countingValues.forEach(proposal => {
            const seriesData = [];
            proposal.forEach(option => {
              seriesData.push({
                value: option.shares,
                name: option.option,
              });
            });
            const graphOption = this.buildOptions(this.textProperty, this.call.options, seriesData);
            this.options.push(graphOption);
          });
        }
      });
  }

  ngOnDestroy() {
    this.stateSubscription && this.stateSubscription.unsubscribe();
  }

  private buildOptions(textProperty: string, legendDataProperty: string[], seriesDataProperty: any[]) {
    const option = {
      title: {
        text: textProperty,
        left: 'center',
        show: false,
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
        position: ['5%', '85%'],
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: legendDataProperty,
      },
      series: [
        {
          name: textProperty,
          type: 'pie',
          radius: '50%',
          center: ['50%', '55%'],
          data: seriesDataProperty,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
    return option;
  }

}
