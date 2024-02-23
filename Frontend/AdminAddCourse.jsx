import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, InputGroup, InputGroupText, Button, Tooltip } from 'reactstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './AdminAddCourse.css';

const AdminAddCourse = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [tooltipOpen, setTooltipOpen] = useState(false); // State for tooltip

  const toggleTooltip = () => setTooltipOpen(!tooltipOpen); // Toggle tooltip

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleGoBack = () => {
    navigate('/admin-dash'); // Navigate back to '/admin-dash'
  };

  return (
    <div className="admin-add-course-container">
      {/* Back arrow */}
      <div className="back-arrow" onClick={handleGoBack}>
        <i className="bi bi-arrow-left"></i> Back to Admin Dashboard
      </div>
      
      {/* Form */}
      <Form onSubmit={handleSubmit} className="admin-add-course-form">
        <FormGroup>
          <Label for="courseName">Course Name</Label>
          <InputGroup>
            <InputGroupText>
              <i className="bi bi-book"></i>
            </InputGroupText>
            <Input type="text" name="courseName" id="courseName" placeholder="Enter Course Name" />
          </InputGroup>
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="description">Description</Label>
          <InputGroup>
            <InputGroupText>
              <i className="bi bi-card-text"></i>
            </InputGroupText>
            <Input type="textarea" name="description" id="description" placeholder="Enter Description" />
          </InputGroup>
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="duration">Duration (in hours)</Label>
          <InputGroup>
            <InputGroupText>
              <i className="bi bi-clock"></i>
            </InputGroupText>
            <Input type="number" name="duration" id="duration" placeholder="Enter Duration (in hours)" />
          </InputGroup>
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="cost">Cost</Label>
          <InputGroup>
            <InputGroupText>
              <i className="bi bi-cash"></i>
            </InputGroupText>
            <Input type="text" name="cost" id="cost" placeholder="Enter Cost" />
          </InputGroup>
        </FormGroup>
        <br />
        {/* Additional Input for Secret Key */}
        <FormGroup>
          <Label for="secretKey">Secret Key</Label>
          <InputGroup>
            <InputGroupText>
              <i className="bi bi-key"></i>
            </InputGroupText>
            <Input type="password" name="secretKey" id="secretKey" placeholder="Enter Secret Key" />
            {/* Tooltip for Secret Key */}
            {/* <Tooltip placement="top" isOpen={tooltipOpen} target="secretKey" toggle={toggleTooltip}> */}
              Find Secret Key in Profile Page
            {/* </Tooltip> */}
          </InputGroup>
        </FormGroup>
        <br />
        <div className="border-top pt-3 mt-3 d-flex align-items-center gap-2">
          <Button type="submit" className="btn btn-success mr-2">
            ADD
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AdminAddCourse;
    