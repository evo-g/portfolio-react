import React from 'react';
import { timelineData } from '../../data';
import './Timeline.css';

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <br />
      <time>{data.date}</time>
      <p>{data.text}</p>
      <p>{data.info}</p>
      {data.link && (
        <a
          href={data.link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.link.text}
        </a>
      )}
      <span className="circle" />
    </div>
  </div>
);


const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.reverse().map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

export default Timeline;
