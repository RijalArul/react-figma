import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ImageAddTodos from '../assets/image/hands-character-writing-letter-desk-with-papers-pencil-envelopes-coffee-cup_74855-10720.jpg'
import DateTimePicker from 'react-datetime-picker'
import * as moment from 'moment'

function Todos () {
  const [value, onChange] = useState(new Date())

  return (
    <>
      <Navbar />
      <div className='container'>
        <div class='jumbotron-todos'>
          <h3 className='text-jumbotron'>T O D O S</h3>
        </div>

        <button
          type='button'
          className='btn btn-primary btn-add-todos'
          data-toggle='modal'
          data-target='#exampleModal'
        >
          Add Todos
        </button>

        <div
          class='modal fade'
          id='exampleModal'
          tabindex='-1'
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div class='modal-dialog' role='document'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h5 class='modal-title' id='exampleModalLabel'>
                  Add Todos
                </h5>
                <button
                  type='button'
                  class='close'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div class='modal-body'>
                <div class='float-right'>
                  <img src={ImageAddTodos} className='add-todos-images' />
                  <form>
                    <div class='form-group'>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleInputTitle1'
                        placeholder='title'
                      />
                    </div>
                    <div class='form-group'>
                      <DateTimePicker
                        onChange={onChange}
                        value={value}
                        minDate={moment().toDate()}
                        placeholderText='Select a day'
                        className='add-todos-dates'
                      />
                    </div>

                    <div class='form-group'>
                      <select class='form-control' id='select-status'>
                        <option selected disabled>
                          Select Status
                        </option>
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                    </div>
                    <button
                      type='submit'
                      className='btn btn-primary submit-add-todos'
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div class='modal-footer'>
                <button
                  type='button'
                  data-dismiss='modal'
                  class='btn btn-primary'
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class='card mt-3 mb-3'>
          <div class='card-body-todos'>
            <h5>
              This is some text within a card body, 14 November 2021 08:20:17{' '}
              <select className='select-active'>
                <option>1</option>
                <option>1</option>
                <option>1</option>
              </select>
              <button>Delete</button>
            </h5>
          </div>
        </div>
        <div class='card mt-3 mb-3'>
          <div class='card-body-todos'>
            <h5>
              This is some text within a card body, 14 November 2021 08:20:17{' '}
              <select className='select-active'>
                <option>1</option>
                <option>1</option>
                <option>1</option>
              </select>
              <button>Delete</button>
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todos
