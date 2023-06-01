import React from 'react';

const FilterDropdown = ({ filterStatus, handleFilterChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="filter" className="form-label">
        Filter:
      </label>
      <select
        id="filter"
        value={filterStatus}
        onChange={handleFilterChange}
        className="form-select"
      >
        <option value="All">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};

export default FilterDropdown;
