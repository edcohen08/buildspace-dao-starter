import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import PropTypes from "prop-types";

const shortenAddress = (str) => {
    return str.substring(0, 6) + "..." + str.substring(str.length - 4);
};

const Members = ({ members }) => {
    return (
        <>
            <h3>Members</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1000}}>
                    <TableHead>
                    <TableRow>
                        <TableCell>Address</TableCell>
                        <TableCell align="right">Token Amount</TableCell>
                        <TableCell align="right">Num Votes</TableCell>
                        <TableCell align="right">Num Proposals</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {members.map((member) => (
                            <TableRow key={member.address}>
                            <TableCell component="th" scope="row">
                                {shortenAddress(member.address)}
                            </TableCell>
                            <TableCell align="right">
                                {member.tokenAmount}
                            </TableCell>
                            <TableCell align="right">
                                0
                            </TableCell>
                            </TableRow>
                        )
                    )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    ) 
}

Members.propTypes = {
    members: PropTypes.array,
}

Members.defaultProps = {
    members: [],
}

export default Members;