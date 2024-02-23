'use client';

import React, {
  FC,
  ReactElement,
} from 'react';

import { useRouter } from 'next/navigation';

import {
  ColumnDirective,
  ColumnsDirective,
  CommandColumn,
  Filter,
  GridComponent,
  Inject,
  Page,
  Resize,
  Sort,
} from '@syncfusion/ej2-react-grids';

import { baseUrl } from '../../utils/common';

interface columnDirective {
  field: string;
  headerText?: string | undefined;
  width: string;
  format: string;
  textAlign: string;
  visible?: boolean;
  type?: string;
  editType?: string;
  displayAsCheckBox?: boolean;
}

interface IProps {
  data?: object[] | undefined;
  columnDirectives: columnDirective[];
  serviceName: string;
  serviceNameForApi?: string;
}

export const MPGrid: FC<IProps> = (props: IProps): ReactElement => {
  let grid: GridComponent | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let rowData: any;

  const router = useRouter();

  const resizeSettings: object = { mode: 'Normal' };
  const selectSettings: object = { mode: 'Row' };
  const pageSettings: object = {
    pageSize: 10,
    pageSizes: ['5', '10', '20', '50', 'All'],
  };
  const filterSettings: object = {
    type: 'FilterBar',
    mode: 'Immediate',
    immediateModeDelay: 0,
  };

  const commands = [
    {
      buttonOption: {
        content: 'View',
        cssClass: 'e-flat',
      },
    },
    {
      buttonOption: {
        content: 'Delete',
        cssClass: 'e-flat',
      },
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const commandClick = (args: any) => {
    if (grid) {
      rowData = args.rowData;
      if (args.commandColumn.buttonOption.content === 'Delete') {
        if (rowData) {
          if (props.serviceNameForApi !== undefined) {
            const delURL = `${baseUrl}/${props.serviceNameForApi.toLowerCase()}/${
              rowData.sid
            }`;

            const requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
            };

            fetch(delURL, requestOptions);

            router.push(
              `/services/${props.serviceName.toLowerCase()}`,
            );
          }
        }
      }

      if (args.commandColumn.buttonOption.content === 'View') {
        if (rowData) {
          router.push(
            `/services/${props.serviceName.toLowerCase()}/browse/${
              rowData.sid
            }`,
          );
        }
      }
    }
  };

  return (
    <div className="m-3">
      <GridComponent
        ref={(g) => (grid = g)}
        dataSource={props.data}
        allowGrouping={false}
        allowSorting
        allowFiltering
        allowPaging
        allowResizing
        pageSettings={pageSettings}
        resizeSettings={resizeSettings}
        filterSettings={filterSettings}
        selectionSettings={selectSettings}
        height={460}
        commandClick={commandClick}
      >
        <ColumnsDirective>
          <ColumnDirective
            headerText="Actions"
            width="150"
            commands={commands}
          />
          {props.columnDirectives.map((colDirective) => (
            <ColumnDirective
              key={colDirective.field}
              field={colDirective.field}
              headerText={colDirective.headerText}
              width={colDirective.width}
              format={colDirective.format}
              textAlign="Left"
              visible={colDirective.visible}
              type={colDirective.type}
              editType={colDirective.editType}
              displayAsCheckBox={
                                colDirective.displayAsCheckBox
                            }
            />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Sort,
            Filter,
            CommandColumn,
            Resize,
          ]}
        />
      </GridComponent>
    </div>
  );
};
