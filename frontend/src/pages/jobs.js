import React, { Component } from "react";
import axios from "axios";
import "./job.css";

class Jobs extends Component {
  state = {
    jobs: [],
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://jobs-api14.p.rapidapi.com/list",
        {
          params: {
            query: "Web Developer",
            location: "United States",
            distance: "1.0",
            language: "en_GB",
            remoteOnly: "false",
            datePosted: "month",
            employmentTypes: "fulltime;parttime;intern;contractor",
            index: "0",
          },
          headers: {
            "X-RapidAPI-Key":
              "3a492f869dmsh0cd433233fcf9c0p11b07bjsne11aad56a994",
            "X-RapidAPI-Host": "jobs-api14.p.rapidapi.com",
          },
        }
      );
      const jobsWithExpanded = response.data.jobs.map((job) => ({
        ...job,
        expanded: false, // Initialize expanded property to false for each job
      }));
      this.setState({
        jobs: jobsWithExpanded,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error: error.message,
        loading: false,
      });
    }
  }

  toggleDescription = (index) => {
    const jobs = [...this.state.jobs];
    jobs[index].expanded = !jobs[index].expanded;
    this.setState({ jobs });
  };

  render() {
    const { jobs, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h1>Jobs Available</h1>
        <div className="job-card">
          {jobs.map((job, index) => (
            <div key={job.id} className="job">
              <h2>{job.title}</h2>
              <h3>{job.company}</h3>
              <div
                className={`job-description ${job.expanded ? "expanded" : ""}`}
              >
                {job.description}
              </div>
              {job.description.length > 20 && (
                <button onClick={() => this.toggleDescription(index)}>
                  {job.expanded ? "Read less" : "Read more"}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Jobs;
