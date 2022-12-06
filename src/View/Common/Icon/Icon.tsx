import React, { FunctionComponent } from "react";
import {
    FolderAddOutlined,
    FolderOpenOutlined,
    BorderOutlined,

    DeploymentUnitOutlined,
    ControlOutlined,
    FileProtectOutlined,
    SafetyCertificateOutlined,
    PrinterOutlined,
    SettingOutlined,
    CloseOutlined,
    FontSizeOutlined,
} from "@ant-design/icons";

interface IProps {
    className?: string,
    type: string,
}

export const Icon: FunctionComponent<IProps> = ({ type, className }) => {

    const iconProps = {
        className,
    }

    switch(type) {
        case 'folderAdd'  : return <FolderAddOutlined { ...iconProps } />
        case 'folderOpen' : return <FolderOpenOutlined { ...iconProps } />

        case 'controls'   : return <ControlOutlined { ...iconProps } />
        case 'frames'     : return <BorderOutlined { ...iconProps } />
        case 'texts'      : return <FontSizeOutlined { ...iconProps } />
        case 'modules'    : return <DeploymentUnitOutlined { ...iconProps } />
        case 'contract'   : return <FileProtectOutlined { ...iconProps } />
        case 'insurance'  : return <SafetyCertificateOutlined { ...iconProps } />
        case 'print'      : return <PrinterOutlined { ...iconProps } />
        case 'settings'   : return <SettingOutlined { ...iconProps } />
        case 'close'      : return <CloseOutlined { ...iconProps } />
        default: return <React.Fragment>{ type }</React.Fragment>;
    }

}
