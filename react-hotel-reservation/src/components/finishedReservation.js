import React,{Component} from 'react';
import InnerPageHeader from './innerPageHeader'

export default class InnerPage extends Component {
      render() {
        return (
            <div className="innerPage">
                <div className="topArea">
                    <InnerPageHeader></InnerPageHeader>
                    <div className="content">
                        Finished
                    </div>
                </div>
            </div>
        );
      }
  }

