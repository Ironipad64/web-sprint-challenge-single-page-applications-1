import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Pizza(props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
        const { name, value, type, checked } = evt.target;
        const valueToUSe = type === "checkbox" ? checked : value;
        change(name, valueToUSe);
    };

    return (
        <StyledForm>

            <form className="form container" onSubmit={onSubmit}>
                <div className="container pizza-making-title">
                    <h3>Build your own pizza</h3>
                </div>


                <div className="container size">
                    <div className="size-title h4">
                        <h4>Choice of size</h4>
                    </div>
                    <div className="size">
                        <label>
                            Size
                        <select onChange={onChange} name="size">
                                <option value="">- Select an option -</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                                <option value="new-york-style">New York Style (XL)</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div className="container sauces">

                    <h4>Choice of Sauce</h4>
                    <div className="original-red">
                        <label>
                            Original Red
                        <input
                                type="radio"
                                name="sauce"
                                value="original-red"
                            // onChange={onChange}
                            // checked={values.sauce === "original-red"}
                            />
                        </label>
                    </div>

                    <div className="garlic-ranch">
                        <label>
                            Garlic Ranch
                        <input
                                type="radio"
                                name="sauce"
                                value="garlic-ranch"
                            // onChange={onChange}
                            // checked={values.sauce === "garlic-ranch"}
                            />
                        </label>
                    </div>

                    <div className="bbq-sauce">
                        <label>
                            BBQ Sauce
                        <input
                                type="radio"
                                name="sauce"
                                value="bbq-sauce"
                            // onChange={onChange}
                            // checked={values.sauce === "bbq-sauce"}
                            />
                        </label>
                    </div>

                    <div className="spinach-alfredo">
                        <label>
                            Spinach Alfredo
                        <input
                                type="radio"
                                name="sauce"
                                value="spinach-alfredo"
                            // onChange={onChange}
                            // checked={values.sauce === "spinach-alfredo"}
                            />
                        </label>
                    </div>

                </div>


                <div className="container toppings checkboxes">
                    <div className="toppings-title">
                        <h4>Toppings</h4>
                    </div>

                    <div className="pep">
                        <label>
                            Pepporoni
                            <input
                                type="checkbox"
                                name="pepporoni"
                            // let the checkbox be checked if the value inside state resolves to true!
                            // checked={values.pepperoni}
                            // onChange={onChange}
                            />

                        </label>
                    </div>

                    <div className="sau">
                        <label>
                            Sausage
                            <input
                                type="checkbox"
                                name="sausage"
                            // checked={values.sausage}
                            // onChange={onChange}
                            />
                        </label>
                    </div>

                    <div className="can-bac">
                        <label>
                            Canadian Bacon
                            <input
                                type="checkbox"
                                name="canadian-bacon"
                            // checked={values.canadian-bacon}
                            // onChange={onChange}
                            />
                        </label>
                    </div>

                    <div className="pin">
                        <label>
                            Pineapple
                            <input
                                type="checkbox"
                                name="pineapple"
                            // checked={values.pineapple}
                            // onChange={onChange}
                            />
                        </label>
                    </div>

                    <div className="bac">
                        <label>
                            Bacon
                            <input
                                type="checkbox"
                                name="bacon"
                            // checked={values.bacon}
                            // onChange={onChange}
                            />
                        </label>
                    </div>
                    <div className="pin">
                        <label>
                            Pineapple
                            <input
                                type="checkbox"
                                name="pineapple"
                            // checked={values.pineapple}
                            // onChange={onChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="container button">
                    <button className="md-button shop-button">Submit</button>
                </div>
            </form>

        </StyledForm>
    )
}







const StyledForm = styled.div`
    background-color: #f8c758;
    margin-left:35%;
    margin-right:35%;
    margin-bottom: 4%;
/* *{
    border: 1px solid black;
} */

h3{
    text-align: center;
    margin-top: 0px;
}

h4{
    background-color: #e8a918;
}


.container{
    display: flex;
    flex-direction: column
  
}

/* .toppings-title{
    margin-top:10px;
} */
.toppings{
    flex-direction: column;
}

.md-button {
  display: inline-block;
  box-sizing: border-box;
  margin: 0 8px;
  border: none;
  border-radius: 2px;
  padding: 0 16px;
  min-width: 64px;
  height: 36px;
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  color: #CC5B3B;
  background-color: #ffd88c;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  font-size: 14px;
  font-weight: 500;
  line-height: 36px;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
`
