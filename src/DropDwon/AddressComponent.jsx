import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"
import { useState } from "react";

const AddressComponent = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} {...props}>
            <DropdownToggle caret size="lg">
                Large Button
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>country</DropdownItem>
                <DropdownItem>india</DropdownItem>
                <DropdownItem>pakistan</DropdownItem>
                <DropdownItem>srilanka</DropdownItem>
                <DropdownItem>Afganistan</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default AddressComponent;