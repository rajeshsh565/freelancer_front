import { Form, useSubmit } from "react-router-dom";
import FormRowCheck from "./FormRowCheck";
import FormInput from "./FormInput";
import { useProjectsContext } from "../pages/Browse";

const FilterContainer = () => {
  const { queryParams } = useProjectsContext();
  const fixedFilterDisabled = queryParams.fixed_price!=="on" && (queryParams.hourly_projects=="on" || queryParams.contests=="on");
  const hourlyFilterDisabled = queryParams.hourly_projects!=="on" && (queryParams.fixed_price=="on" || queryParams.contests=="on");
  const contestsFilterDisabled = queryParams.contests!=="on" && (queryParams.fixed_price=="on" || queryParams.hourly_projects=="on");
  return (
    <Form>
      <h5>Filter By:</h5>
      <div>
        <p className="fw-bold">Budget</p>
        <div>
          <FormRowCheck name="fixed_price" label="Fixed Price Projects" />
          <div className="d-flex mt-3">
            <FormInput name="fixed_min" placeholder="min" disabled={fixedFilterDisabled}/>
            <p className="mx-3">to</p>
            <FormInput name="fixed_max" placeholder="max" disabled={fixedFilterDisabled}/>
          </div>
        </div>
        <div>
          <FormRowCheck name="hourly_projects" label="Hourly Projects" />
          <div className="d-flex mt-3">
            <FormInput name="hourly_min" placeholder="min" disabled={hourlyFilterDisabled}/>

            <p className="mx-3">to</p>
            <FormInput name="hourly_max" placeholder="max" disabled={hourlyFilterDisabled}/>
          </div>
          <select name="duration" id="duration" className="mb-3" disabled={hourlyFilterDisabled}>
            <option value="all_duration">All Duration</option>
            <option value="less_than_1week">Less than 1 Week</option>
            <option value="1week_to_4week">1 Week to 4 Weeks</option>
            <option value="1month_to_3month">1 Months to 3 Months</option>
          </select>
        </div>
        <div>
          <FormRowCheck name="contests" label="Contests" />
          <div className="d-flex mt-3">
            <FormInput name="contests_min" placeholder="min" disabled={contestsFilterDisabled}/>
            <p className="mx-3">to</p>
            <FormInput name="contests_max" placeholder="max" disabled={contestsFilterDisabled}/>
          </div>
        </div>
      </div>
      <div
        className="bg-secondary my-3"
        style={{ width: "75%", height: "1px" }}
      ></div>
      <div>
        <p className="fw-bold">Type</p>
        <div>
          <FormRowCheck name="local_jobs" label="Local Jobs" />
          <FormRowCheck name="featured_jobs" label="Featured Jobs" />
          <FormRowCheck name="recuiter_jobs" label="Recuiter Jobs" />
          <FormRowCheck name="fulltime_jobs" label="Full Time Jobs" />
        </div>
      </div>
      <div
        className="bg-secondary my-3"
        style={{ width: "75%", height: "1px" }}
      ></div>
      <div>
        <p className="fw-bold">Skills</p>
        <div>
          <FormRowCheck name="skill_dotnet5" label=".NET 5.0/6" />
          <FormRowCheck name="skill_dotnet" label=".NET" />
          <FormRowCheck name="skill_php" label="PHP" />
          <FormRowCheck name="skill_html" label="HTML" />
        </div>
      </div>
      <div
        className="bg-secondary my-3"
        style={{ width: "75%", height: "1px" }}
      ></div>
      <div>
        <p className="fw-bold">Languages</p>
        <div>
          <FormRowCheck name="en" label="English" />
          <FormRowCheck name="sp" label="Spanish" />
          <FormRowCheck name="ge" label="German" />
          <FormRowCheck name="fr" label="French" />
        </div>
      </div>
      <div
        className="bg-secondary my-3"
        style={{ width: "75%", height: "1px" }}
      ></div>
      <div>
        <p className="fw-bold">Job State</p>
        <div>
          <input type="radio" id="all_open" name="job_state" />
          <label htmlFor="all_open" className="ms-2">
            All Open Jobs
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="all_open_closed"
            name="job_state"
            defaultChecked
          />
          <label htmlFor="all_open_closed" className="ms-2">
            All Open or Closed Jobs
          </label>
        </div>
      </div>
    </Form>
  );
};
export default FilterContainer;
