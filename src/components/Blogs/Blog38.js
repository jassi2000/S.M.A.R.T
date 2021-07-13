import React from 'react'

export default function Blog38() {
    return (
        <div className="blogContainer">

           <h2>How to Start Intraday Trading on Groww</h2>
<p>By definition, intraday means within the same day. When you place an ‘intraday’ order, you have no intention of fulfilling it and taking delivery. When you place a delivery sell order, the stock is sold either from your Demat or settled against any delivery buy order placed by you, whose delivery is pending. </p>

<p>However, in intraday orders, delivery of shares bought and selling of shares from demat is not the objective. When you place an intraday order, you need to necessarily square-off your transaction before the end of the trading day. Which means-</p>

    <p> a)If you buy 100 shares of HDFC Bank in the morning, you have to sell all 100 shares before the end of the day or the broker will sell it on your behalf. </p>
    <p> b) On the other hand, if you sell 100 shares of HDFC Bank in the morning, then you need to buy them back before the end of the day.</p>
<h3>How to Place an Intraday Order on Groww </h3>
<p>The Intraday Trading feature is now available on Groww Web, Android app, and iOS app.</p>
<p>Step 1: Select the company whose stocks you wish to trade. The default order type is ‘delivery’.</p>
<p>Step 2: In the order type, select ‘Intraday’,  you can now place a sell order for stocks that are not in your Demat account.</p>
<p>Once you place the order, it would show you the success screen. You can check the order details. Remember, since this is intraday, you will have to square off your position before the end of the trading day.</p>
<h3>Salient Features of Intraday Trading </h3>
<p>1. Short Sell is Permitted</p>

<p>You might have come across the term short-sell while reading up on stock investing. It is also called ‘going short’. In simple terms, short selling is selling shares that you don’t have in your demat account. In intraday trading, the broker allows you to do this under the promise that you will return the shares back by the end of the trading day.</p>

<p>This is a unique feature of intraday trading since it allows you to benefit from negative price fluctuations.</p> 
<p>2. Margin Benefit</p>

<p>When you opt for an intraday trade, you don’t take delivery of the shares in a buy transaction or give shares to the broker in a sell transaction. Since you square-off the transaction by the end of the day, the profits or losses are marginal compared to the stock price.</p>

<p>For example, if you buy 10 shares of ABC Ltd  at Rs.1100 per share (total investment of Rs.11000) and sell it at Rs.1150 by the end of the day, your profit is Rs.50 per share or Rs.500 total. On the other hand, if you sell it at Rs.1050, then your loss is Rs.50 per share or Rs.500 total. </p>
<h4>How is the margin calculated?</h4>
<p>The stock exchange determines the margin requirement for each stock by calculating the Value at Risk (VaR) and Extreme Loss Margin (ELM). </p>
<p>3. Square Off or Netting of Stock</p>

<p>In the stock market, a position is a binding commitment to buy or sell stocks on an exchange. So, if you place an intraday buy order of 10 shares of ABC Ltd. on the NSE, then you have an open buy position (also called Long Position) that needs to be closed before the end of the day. On the other hand, if you place an intraday sell order of 10 shares of ABC Ltd. on the NSE, then you have an open sell position (also called Short Position) that needs to be closed before the end of the day.</p>

<p>In intraday trading, square off or netting happens as follows:</p>

   <p>1. For an Open Buy position or Long Position or Positive position – the square off will be a sell transaction</p>
   <p>2. For an Open Sell Position or Short Position or Negative Position – the square off will be a buy transaction</p>

<h3>Intraday on Groww</h3>
<p>1. Automatic Square Off by Groww’s system during the day before the cut-off time (MTM)</p>

<p>Being your stockbroker, Groww reserves the right to exit or square off your open position during the day if the Mark to Market margin or MTM reaches the following levels:</p>

  <p> a)If 50% of the margin is being used, then the system sends a warning to add more funds to the margin</p>
  <p> b)If 80% of the margin is being used, then the system squares off the position</p>

<p>2. Converting Positions: Delivery to Intraday and Vice-versa</p>

<p>You can convert your positions between delivery and intraday as explained below:</p>
<p>Delivery to Intraday</p>

   <p>a) Buy order – If you have placed a delivery buy order and have an open buy or long position, then you can convert it into an intraday order without having to deposit any more margin.</p>
   <p>b) Sell order – If you have placed a delivery sell order and have an open sell or short position, then you can convert it into an intraday order. Further, you might have to deposit funds towards the margin depending on the stock.</p>

<p>Intraday to Delivery</p>

    <p>a)Buy order – If you have placed an intraday order and have an open buy or long position, then you can convert it into delivery order. However, since you only pay the margin for an intraday order, you will have to deposit funds to ensure that the total purchase amount is available with us.</p>
    <p>b)Sell order – If you have placed an intraday sell order and have an open sell or short position, then you can convert it into delivery order. Further, this is allowed only if you have the shares in your Demat account. No additional margin will be required.</p>

        </div>
    )
}
