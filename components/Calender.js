import React from "react";

const Calender = (source) => {
  console.log(source);
  return (
    <div>
      <div class="calendar">
        <div class="calendar__opts">
          <select name="calendar__month" id="calendar__month">
            <option>Jan</option>
            <option>Feb</option>
            <option>Mar</option>
            <option>Apr</option>
            <option selected>May</option>
            <option>Jun</option>
            <option>Jul</option>
            <option>Aug</option>
            <option>Sep</option>
            <option>Oct</option>
            <option>Nov</option>
            <option>Dec</option>
          </select>

          <select name="calendar__year" id="calendar__year">
            <option selected>2023</option>
            <option>2024</option>
          </select>
        </div>

        <div class="calendar__body">
          <div class="calendar__days">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>

          <div class="calendar__dates">
            <div class="calendar__date calendar__date--grey">
              <span>27</span>
            </div>
            <div class="calendar__date calendar__date--grey">
              <span>28</span>
            </div>
            <div class="calendar__date calendar__date--grey">
              <span>29</span>
            </div>
            <div class="calendar__date calendar__date--grey">
              <span>30</span>
            </div>
            <div class="calendar__date calendar__date--selected calendar__date--first-date calendar__date--range-start">
              <span>1</span>
            </div>
            <div class="calendar__date calendar__date--selected">
              <span>2</span>
            </div>
            <div class="calendar__date calendar__date--selected">
              <span>3</span>
            </div>
            <div class="calendar__date calendar__date--selected">
              <span>4</span>
            </div>
            <div class="calendar__date calendar__date--selected calendar__date--last-date">
              <span>5</span>
            </div>
            <div class="calendar__date">
              <span>6</span>
            </div>
            <div class="calendar__date">
              <span>7</span>
            </div>
            <div class="calendar__date">
              <span>8</span>
            </div>
            <div class="calendar__date">
              <span>9</span>
            </div>
            <div class="calendar__date">
              <span>10</span>
            </div>
            <div class="calendar__date">
              <span>11</span>
            </div>
            <div class="calendar__date">
              <span>12</span>
            </div>
            <div class="calendar__date">
              <span>13</span>
            </div>
            <div class="calendar__date">
              <span>14</span>
            </div>
            <div class="calendar__date">
              <span>15</span>
            </div>
            <div class="calendar__date calendar__date--selected calendar__date--first-date calendar__date--range-start">
              <span>16</span>
            </div>
            <div class="calendar__date calendar__date--selected calendar__date--last-date">
              <span>17</span>
            </div>
            <div class="calendar__date calendar__date--selected calendar__date--first-date">
              <span>18</span>
            </div>
            <div class="calendar__date calendar__date--selected">
              <span>19</span>
            </div>
            <div class="calendar__date calendar__date--selected calendar__date--last-date">
              <span>20</span>
            </div>
            <div class="calendar__date ">
              <span>21</span>
            </div>
            <div class="calendar__date">
              <span>22</span>
            </div>
            <div class="calendar__date calendar__date--selected calendar__date--last-date calendar__date--range-end">
              <span>23</span>
            </div>
            <div class="calendar__date">
              <span>24</span>
            </div>
            <div class="calendar__date">
              <span>25</span>
            </div>
            <div class="calendar__date">
              <span>26</span>
            </div>
            <div class="calendar__date">
              <span>27</span>
            </div>
            <div class="calendar__date">
              <span>28</span>
            </div>
            <div class="calendar__date">
              <span>29</span>
            </div>
            <div class="calendar__date">
              <span>30</span>
            </div>
            <div class="calendar__date">
              <span>31</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
