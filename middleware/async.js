const asyncWrapper = (fn) =>{
    return async (req, res, next) =>{
         try{
             
         }catch (error){
             next(error)
         }
    }
}

module.exports = asyncWrapper