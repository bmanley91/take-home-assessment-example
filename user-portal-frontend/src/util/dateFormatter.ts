export const formatDOB = (dob: Date): string => {
    return new Date(dob).toLocaleString('en-US', {year: 'numeric', month: 'numeric', day: 'numeric'});

}