import * as React from 'react';
import {useFireBaseDB} from '../App';

const FireBaseTestFile: React.FC = function FireBaseTestFile(props) {
    const useDB = useFireBaseDB();
    const [workbook, setWorkbook] = React.useState<any | null>(null);

    React.useEffect(() => {
        useDB.ref('workbook').on('value', (snapshot) => {
            setWorkbook(snapshot.val());
        });
    }, []);

    return (
        <>
            {!workbook && (<div>workbook?[0]</div>)}
            {workbook && (
                <div>
                    {
                        workbook[0].questions[0].title
                    }
                </div>
            )}
        </>
    );
};

export default FireBaseTestFile;