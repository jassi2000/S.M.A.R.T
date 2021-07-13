import React from 'react'

export default function Blog16(){
    return(
        <div className="blogContainer">
             <h1 class="h2">Indian vs US Stock Market: A Comparative Analysis</h1>
   <p> The US stock markets have always been an enigma to Indian retail investors. Some of the biggest companies in the world are listed there. Now, that there are various ways to invest in the US stock markets, directly and indirectly, I decided to do a comparison study between the two and how they have performed in the last ten years. For the US markets, I used the Dow Jones Industrial Average Index (DJI) as a proxy and for the Indian stock markets, I used our very own BSE Sensex. I decided to compare and contrast the following parameters:</p>
    <ul>  
   <li>Performance in terms of returns</li>
   <li> Correlation between the two markets</li>
   <li> Volatility</li>
   <li> Top-performing sectors</li>
   <li> Valuations</li>
   <li> Size</li>
</ul>  
<h3>Performance</h3>
    <p>In the last ten years, both the US and the Indian markets have generated a similar return for their investors. The DJI has generated a compounded annual return of 9.75% whereas the Sensex has generated a return of 9.70% in the last ten years. The returns in the first five years of the decade (2011-15) were also pretty similar with the US markets growing at 12.86% compounded annually whereas the Indian markets grew at 12.11% compounded annually. In the table below, you will find returns in each year for the last ten years:
    </p>
    <table>
        <tbody>
        <tr>
        <td><b>Years</b></td>
        <td><b>Dow Jones</b></td>
        <td><b>Sensex</b></td>
        </tr>
        <tr>
        <td><span >2011</span></td>
        <td><span >2.74%</span></td>
        <td><span >-15.67%</span></td>
        </tr>
        <tr>
        <td><span >2012</span></td>
        <td><span >3.73%</span></td>
        <td><span >12.99%</span></td>
        </tr>
        <tr>
        <td><span >2013</span></td>
        <td><span >19.60%</span></td>
        <td><span >6.41%</span></td>
        </tr>
        <tr>
        <td><span >2014</span></td>
        <td><span >13.53%</span></td>
        <td><span >34.05%</span></td>
        </tr>
        <tr>
        <td><span >2015</span></td>
        <td><span >1.52%</span></td>
        <td><span >-10.50%</span></td>
        </tr>
        <tr>
        <td><span >2016</span></td>
        <td><span >20.02%</span></td>
        <td><span >7.06%</span></td>
        </tr>
        <tr>
        <td><span >2017</span></td>
        <td><span >24.44%</span></td>
        <td><span >23.14%</span></td>
        </tr>
        <tr>
        <td><span >2018</span></td>
        <td><span >-10.79%</span></td>
        <td><span >0.29%</span></td>
        </tr>
        <tr>
        <td><span >2019</span></td>
        <td><span >14.16%</span></td>
        <td><span >13.78%</span></td>
        </tr>
        <tr>
        <td><span >2020</span></td>
        <td><span >6.70%</span></td>
        <td><span >12.14%</span></td>
        </tr>
        </tbody>
        </table>
        <h3>Correlation</h3>
        <p> For the unversed, correlation is a measure of the mutual relationship (or lack of) between two variables. It basically indicates whether the two variables move together or move in opposing directions or have no relationship with one another.</p>
    
       <p> A correlation coefficient of 1 indicates a perfectly direct relationship in which the two variables move together, a correlation of -1 indicates a perfectly inverse relationship and a correlation of 0 indicates that there is no relationship between the two variables at all.</p> 
        
       <p> I compared the monthly returns of the last ten years of the two indices and computed a correlation coefficient of 0.54. This indicates that there is a semi-strong relationship between the two markets and hence any diversification strategies must be handled with caution.</p>
        
       <p> Furthermore, the correlation coefficient in the last three years has been 0.64 which indicates that there is a definite relationship between the two. </p>
        
       <h3>Volatility</h3>
       <p>What is volatility and why should you care about it? Volatility is the standard deviation of returns around its mean. It is a good indicator of how much the market moves up and down in the defined period (preferably short term).</p>
       
      <p> A lot of long-term investors tend not to care about volatility but it is important because if you are involved in a highly volatile market then a market dip might compel you to sell early.</p>
       
       <p>Hence volatility can work as a measure of risk. I once again looked at the last ten year’s returns while calculating volatility. The volatility of the Dow Jones Index was 3.92% whereas the BSE Sensex was considerably more volatile at 5.06% in the last ten years. On this evidence, it can be inferred that at least in the last ten years the Indian markets have been riskier while giving the same returns as the US markets.</p> 
       
       <h2><span id="Top_Performing_Sectors"><b>Top Performing Sectors</b></span></h2>
       <p><span >If we look at the sectors which have the most weight in an index then that is a good indicator of which sectors have been growing the most in the economy. In the table below, you can find the top five sectors in that particular index by weight:</span></p>
       <table>
        <tbody>
        <tr>
        <td><b>Sensex</b></td>
        <td><b>Dow Jones (DJIA)</b></td>
        </tr>
        <tr>
        <td><span >Financials (41.95%)</span></td>
        <td><span >Infotech (22.4%)</span></td>
        </tr>
        <tr>
        <td><span >Infotech (14.87%)</span></td>
        <td><span >Industrials (18.2%)</span></td>
        </tr>
        <tr>
        <td><span >Oil  Gas (11.86%)</span></td>
        <td><span >Financials (15.2%)</span></td>
        </tr>
        <tr>
        <td><span >FMCG (11.06%)</span></td>
        <td><span >Healthcare (13.1%)</span></td>
        </tr>
        <tr>
        <td><span >Automobiles (4.93%)</span></td>
        <td><span >Consumer Discretionary (12.9%)</span></td>
        </tr>
        </tbody>
        </table>
        <p><span >It is clear from the above table that financials dominate the Indian indices while US Markets favor tech firms.</span></p>
        <h3>Valuations</h3>
       <p> In terms of valuations, the Dow Jones industrial average has a PE Ratio of 16 whereas the Sensex has a PE ratio of 33.13. This doesn’t mean that the Indian market is overvalued and you should only invest in the US Markets. It essentially means that the market believes that the earnings of Indian companies will grow faster than US companies. Given that the Indian GDP has grown at a faster rate than the US GDP in recent years, this might not be an unreasonable expectation. In the last ten years too, profit after tax of Indian companies in the index grew 12.6% compounded annually against 11% compounded annual growth of US companies. </p>
        
        <h3>Size</h3>
        <p>In terms of size, there is no comparison between the two. The combined market capitalization of all stocks in the DJIA amounts to 8.33 trillion dollars, nearly 8 times the combined market capitalization of all stocks in the BSE Sensex at 1.16 trillion dollars. Given the size of the two countries, this shouldn’t come as a surprise.</p>
         
        </div>
    )
}