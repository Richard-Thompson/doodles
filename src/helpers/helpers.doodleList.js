export const addFilterOptions = (options)=> {
    return options.length === 0 ?
        ''
        :
    options.reduce((acc,option,i)=>{
        return option === 'Sold' || option === 'For Sale' || option === 'Newest' || option === 'Oldest' ? acc+='' : acc+= ` && doodle.fields.types.indexOf('${option}') !== -1 `
    },'')
}