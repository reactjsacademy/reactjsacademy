import React from 'react'
import { LIGHT_BLUE } from '../../config/styles'

const IKEA = ({ colour = LIGHT_BLUE, width, height }) => (
  <svg
    viewBox="0 0 450 86"
    preserveAspectRatio="xMidYMid meet"
    width={width}
    height={height}
  >
    <path
      d="M48.553633 75C49.8657932 75 50.3886071 74.4717492 49.6881049 73.674194 49.1413714 73.0527224 48.2016733 68.8198106 48.2016733 64.3141417L48.2016733 11.6858583C48.2016733 7.18018943 49.1413714 2.94727756 49.6881049 2.325806 50.3886071 1.52825083 49.8657932 1 48.553633 1L1.44571342 1C.136970264 1-.389260667 1.52825083.311241546 2.325806.857974981 2.94727756 1.79767307 7.18018943 1.79767307 11.6858583L1.79767307 64.3141417C1.79767307 68.8198106.857974981 73.0527224.311241546 73.674194-.389260667 74.4717492.136970264 75 1.44571342 75L48.553633 75M120.245857 27.415994L137.556235 3.9140111C138.263556 3.20622405 137.908171 2.23603789 137.908171 1.79410255 137.908171 1.35216722 137.908171 1 138.263556 1L185.208943 1C185.826555 1 185.564329 1.44193533 185.298652 1.79410255L165.973273 28.814305C165.089985 29.9640274 165.265952 31.0239817 166.14924 32.1702515L192.709992 74.2024448C192.975669 74.5580647 193.237895 75 192.623734 75L135.261756 75C134.909821 75 134.909821 74.6443802 134.909821 74.2024448 134.909821 73.7639621 135.793109 69.9660803 135.085789 69.2582933L120.259658 46.5573182 120.259658 64.3141417C120.259658 68.8198106 121.208503 73.0527224 121.760558 73.674194 122.467879 74.4717492 121.936526 75 120.615044 75L74.4597854 75C73.1383035 75 72.6069504 74.4717492 73.314271 73.674194 73.8663262 73.0527224 74.8117206 68.8198106 74.8117206 64.3141417L74.8117206 11.6858583C74.8117206 7.18018943 73.8663262 2.94727756 73.314271 2.325806 72.6069504 1.52825083 73.1383035 1 74.4597854 1L120.615044 1C121.936526 1 122.467879 1.52825083 121.760558 2.325806 121.208503 2.94727756 120.259658 7.18018943 120.259658 11.6858583L120.245857 27.415994M252.916628 46.94178C252.916628 46.6457382 253.030309 45.6043677 254.242914 45.6043677L272.476771 45.6043677C274.361132 45.6043677 281.137251 45.3710171 281.719439 45.9596178 282.301627 46.5517014 283.025056 46.1825199 283.025056 45.0645268L283.025056 27.1731539C283.025056 26.0551607 282.301627 25.6859792 281.715994 26.2745799 281.137251 26.8631807 274.361132 26.6298301 272.476771 26.6298301L254.239469 26.6298301C253.030309 26.6298301 252.916628 25.5884595 252.916628 25.2924178L252.920073 21.6667765C252.920073 21.3707347 253.033754 20.3293641 254.242914 20.3293641L280.45516 20.3293641C284.899082 20.3293641 289.077746 21.273215 289.694383 21.8269873 290.47982 22.530522 291 22.0046124 291 20.6811315L291 0 208.442965 0C207.137348 0 206.613723.665223326 207.309593 1.4593119 207.857332 2.08274109 208.7909 6.30743164 208.7909 10.8037841L208.7909 63.3355297C208.7909 67.8283993 207.857332 72.0565727 207.309593 72.6800019 206.613723 73.4706076 207.133903 74 208.43952 74L290.996555 73.9965172 290.996555 52.0232503C290.996555 50.7032522 290.47293 50.1738598 289.690938 50.8773945 289.074301 51.4311668 284.895637 52.3785005 280.448271 52.3785005L254.239469 52.3785005C253.030309 52.3785005 252.913183 51.3371299 252.913183 51.0376053L252.916628 46.94178M421 74C421 74 393.584296 8.77241379 393.191659 7.68965517 392.799022 6.60689655 392.406385 4.73793103 393.095222 3.06551724 393.780614 1.39310345 393.191659 1 392.013748 1L327.841712 1C326.663801 1 326.074846 1.39310345 326.763683 3.06551724 327.449075 4.73793103 327.056438 6.60689655 326.663801 7.68965517 326.271164 8.77241379 302 74 302 74L341.456571 74C342.389945 74 342.586264 73.5551724 342.290064 72.9172414 341.993864 72.2793103 341.993864 70.8034483 342.43472 69.7206897L344.549449 62.6862069C345.238285 60.7172414 346.219878 60.4241379 347.890307 60.4241379L365.235218 60.4241379C366.905647 60.4241379 367.887239 60.7172414 368.576076 62.6862069L370.690805 69.7206897C371.13166 70.8034483 371.13166 72.2793103 370.835461 72.9172414 370.542705 73.5551724 370.739023 74 371.672397 74L421 74zM351.062401 46.0103448C350.445892 45.9586207 350.373564 45.3206897 350.545773 44.8793103L354.816561 34.7448276C354.992214 34.4517241 355.088652 34.1517241 355.457179 34.1517241 355.825707 34.1517241 355.925588 34.4517241 356.094353 34.7448276L360.368586 44.8793103C360.544239 45.3206897 360.468467 45.9586207 359.855402 46.0103448L351.062401 46.0103448 351.062401 46.0103448z"
      fill={colour}
      fillRule="evenodd"
    />
  </svg>
)

export default IKEA
