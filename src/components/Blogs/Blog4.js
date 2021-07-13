import React from 'react'

export default function Blog4(){
    return(
        <div className="blogContainer">
            <h2> When is Intraday Profit Credited?   </h2>
    <p> According to a new regulation by the Securities and Exchange Board of India (Sebi), any profit that you gain from an intraday trade will be unblocked for use only after the markets close on the next working day.

        This means that you will not be able to use your intraday profits from your transaction (T) day for any other transaction on the same day. Sebi has mandated that your intraday profits should be unblocked for use only at the end of the next working day.
           </p>

    <h3>  How Does It Impact You?    </h3>
    <p>  Let’s understand this with the help of an example. 
            
           <li> You conducted two ‘buy transactions where you purchased 10 shares at Rs 1,000 each and 8 shares of  Rs 1,200 each of a company.</li>
        
           <li> This makes your total purchase transactions worth Rs 19,600</li>

<li>Let’s say on the same day you sold 18 stocks worth Rs 1,300 each for Rs 23,400</li>

<li>Your intraday profit from the above transactions becomes Rs 3,800.</li>

Let’s understand the new change in three different scenarios.</p>

    <h3>    Scenario 1: T Day Falls On A Weekday  </h3>
    <p>  According to the new regulation, this intraday profit of Rs 3,800 will be unblocked on T+1 day only.

        Here T is March 12, so T+1 will be March 13. It is being assumed here that March 12 is a weekday and March 13 is a working day.
        
        Your intraday profit will be unlocked for use on March 13, at 3.30 p.m. after markets close for that day.
        
             </p>

    <h3> Scenario 2: T Day Falls On a Friday    </h3>
    <p>   Let’s assume that March 12 (T Day) falls on a Friday (like it did in 2021). In that case, your intraday profits from March 12 will be unblocked at the end of the T+1 working day and not on March 13 which will fall on a Saturday. 

        The next working day in this case will be March 15, Monday. Your intraday profit will be unblocked at 3.30 p.m. on March 15.
  </p>

    <h3>       Scenario 3: </h3>
    <p>      Scenario 2 will repeat in case T+1 day is a market holiday. Say you booked intraday profits on a Tuesday and Wednesday is a market holiday. Your profits will be unblocked at 3.30 p.m. on Thursday. </p>

        </div>
    )
}