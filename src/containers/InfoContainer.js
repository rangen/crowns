import React from 'react'
import { useSelector } from 'react-redux'
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from '@material-ui/core'

const InfoContainer = () => {

  const fmtCash = (val) => {
    let formatted = (+val).toFixed(2)
    return '$' + formatted.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const pol = useSelector(s=>s.selected)
  return (
    <>
      <h1>{pol.candidateName}</h1>
      <img alt='pic' src={pol.photoUrl === 'https://cdn.ballotpedia.org/images/thumb/0/0c/BP-Initials-UPDATED.png/40px-BP-Initials-UPDATED.png' ? 'https://cdn.ballotpedia.org/images/thumb/f/fb/Silhouette_Placeholder_Image.png/150px-Silhouette_Placeholder_Image.png' : pol.photoUrl}></img>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              {'Campaign Finances for 2019-20 Cycle'}
            </TableCell>
            <TableCell align="right">
              {`(last report ${pol.coverageEndDate})`}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              {'Total Funds Raised'}
            </TableCell>
            <TableCell align="right">
              {fmtCash(pol.totalReceipts)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              {'***Total Raised from Individuals'}
            </TableCell>
            <TableCell align="right">
              {fmtCash(pol.totalIndividualContributions)}
            </TableCell>
          </TableRow>
          {!!pol.contribFromOtherComms && 
          <TableRow>
            <TableCell>
              {'***Candidate Raised from other Campaigns'}
            </TableCell>
            <TableCell align="right">
              {fmtCash(pol.contribFromOtherComms)}
            </TableCell>
          </TableRow>}
          {!!pol.contribFromPartyComms && 
          <TableRow>
            <TableCell>
              {'***Candidate Raised from Party'}
            </TableCell>
            <TableCell align="right">
              {fmtCash(pol.contribFromPartyComms)}
            </TableCell>
          </TableRow>}
          {!!pol.loansFromCandidate && 
          <TableRow>
            <TableCell>
              {'***Candidate Loaned to Own Campaign'}
            </TableCell>
            <TableCell align="right">
              {fmtCash(pol.loansFromCandidate)}
            </TableCell>
          </TableRow>}
          {!!pol.contributionsFromCandidate && 
          <TableRow>
            <TableCell>
              {'***Candidate Donated to Own Campaign'}
            </TableCell>
            <TableCell align="right">
              {fmtCash(pol.contributionsFromCandidate)}
            </TableCell>
          </TableRow>}
          <TableRow>
            <TableCell>
              {'Total Funds Spent'}
            </TableCell>
            <TableCell align="right">
              {fmtCash(pol.totalDisbursements)}
            </TableCell>
          </TableRow>
          {(!!pol.individualRefunds || !!pol.commRefunds) && 
            <TableRow>
              <TableCell>
                {'Refunded'}
              </TableCell>
              <TableCell />
            </TableRow>}
            {!!pol.individualRefunds &&
            <TableRow>
              <TableCell>
                {'***Refunded to Individuals'}
              </TableCell>
              <TableCell align="right">
                {fmtCash(pol.individualRefunds)}
              </TableCell>
            </TableRow>}
            {!!pol.commRefunds &&
              <TableRow>
                <TableCell>
                {'***Refunded to Other Campaigns'}
                </TableCell>
              <TableCell align="right">
                {fmtCash(pol.commRefunds)}
              </TableCell>
            </TableRow>}
          <TableRow>
            <TableCell>
              {'Summary'}
            </TableCell>
            <TableCell />
          </TableRow>
          <TableRow>
            <TableCell>
              {'Cash on Hand Beginning Cycle'}
            </TableCell>
            <TableCell align="right">
              {fmtCash(pol.cashOnHandStart)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              {`Cash on Hand Last Report (${pol.coverageEndDate})`}
            </TableCell>
            <TableCell align="right">
              {fmtCash(pol.cashOnHandEnd)}
            </TableCell>
          </TableRow>
          {!!pol.debts &&
            <TableRow>
              <TableCell>
                {'Outstanding Debt for Campaign'}
              </TableCell>
              <TableCell align="right">
                {fmtCash(pol.debts)}
              </TableCell>
            </TableRow>}
        </TableBody>
      </Table>
    </>
  )
}

export default InfoContainer