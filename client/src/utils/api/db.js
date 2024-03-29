import axios from 'axios'

const url = () => {
    return localStorage.getItem("api") || process.env.REACT_APP_IP
}

const newAccount = async (user,account,token) => {
    try {
        const result = await axios.post(`${url()}/user/new-account`, {
            data: {
                user: user,
                account: account,
            }
        }, 
        {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })
        return result
    } catch {
        return null
    }
    
}

const getAccounts = async (email,token) => {
    try {
        const result = await axios.get(`${url()}/user/get-accounts`, {params: {
            email: email
        },
        headers: {
            "Authorization" : `Bearer ${token}`
        }})
        return result
    } catch {
        return null
    }
    
}

const getAccount = async (email,token,id) => {
    try {
        const result = await axios.get(`${url()}/user/get-account`, {params: {
            email: email,
            id: id
        },
        headers: {
            "Authorization" : `Bearer ${token}`
        }})
        return result
    } catch {
        return null
    }
    
}

const getAccountsDetails = async (email,token) => {
    try {
        const result = await axios.get(`${url()}/user/get-accounts-details`, {params: {
            email: email
        },
        headers: {
            "Authorization" : `Bearer ${token}`
        }})
        return result
    } catch {
        return null
    }
    
}

const getAccountStatus = async (email,id,token) => {
    try {
        const result = await axios.get(`${url()}/user/get-account-status`, {params: {
            email: email,
            id: id
        },
        headers: {
            "Authorization" : `Bearer ${token}`
        }})
        return result
    } catch {
        return null
    }
}

const newTransaction = async (account_id,transaction,user,token) => {
    try {
        const result = await axios.post(`${url()}/user/new-transaction`, {
            data: {
                account: {
                    id: account_id
                },
                transaction: transaction,
                user: user
            }
        }, 
        {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })
        return result
    } catch {
        return null
    }
    
}

const getTransactions = async (email,pagination,account_id,token) => {
    try {
        const result = await axios.get(`${url()}/user/get-transactions`, {params: {
            account_id: account_id,
            email: email,
            pagination: pagination
        },
        headers: {
            "Authorization" : `Bearer ${token}`
        }})
        return result
    } catch {
        return null
    }
    
}

const deleteTransaction = async(email,id,token) => {
    try {
        const result = await axios.delete(`${url()}/user/delete-transaction`, {params: {
            id: id,
            email: email
        },
        headers: {
            "Authorization" : `Bearer ${token}`
        }})
        return result
    } catch {
        return null
    }
    
}

const deleteAccount = async(email,id,token) => {
    try {
        const result = await axios.delete(`${url()}/user/delete-account`, {params: {
            id: id,
            email: email
        },
        headers: {
            "Authorization" : `Bearer ${token}`
        }})
        return result
    } catch {
        return null
    }
    
}

const newTag = async(tag_title,user,transaction,token) => {
    try {
        const result = await axios.post(`${url()}/user/new-tag`, {
            data: {
                user: user,
                tag: {
                    title: tag_title
                },
                transaction: transaction
            }
        }, 
        {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })
        return result
    } catch {
        return null
    }
}

const deleteTag = async(email,id,token) => {
    try {
        const result = await axios.delete(`${url()}/user/delete-tag`, {params: {
            id: id,
            email: email
        },
        headers: {
            "Authorization" : `Bearer ${token}`
        }})
        return result
    } catch {
        return null
    }
}

const updateTransaction = async(transaction,user,token) => {
    try {
        const result = await axios.post(`${url()}/user/update-transaction`, {
            data: {
                transaction: transaction,
                user: user
            }
        }, 
        {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })
        return result
    } catch {
        return null
    }
}

const getAnnotations = async (email,id,token) => {
    try {
        const result = await axios.get(`${url()}/user/get-annotations`, {params: {
            email: email,
            id: id
        },
        headers: {
            "Authorization" : `Bearer ${token}`
        }})
        return result
    } catch {
        return null
    }
    
}

const deleteAnnotation = async(email,accountId,annotationId,token) => {
    try {
        const result = await axios.delete(`${url()}/user/delete-annotation`, {params: {
            accountId: accountId,
            annotationId: annotationId,
            email: email
        },
        headers: {
            "Authorization" : `Bearer ${token}`
        }})
        return result
    } catch {
        return null
    }
}

const deleteAllAnnotations = async(email,accountId,token) => {
    try {
        const result = await axios.delete(`${url()}/user/delete-annotations`, {params: {
            accountId: accountId,
            email: email
        },
        headers: {
            "Authorization" : `Bearer ${token}`
        }})
        return result
    } catch {
        return null
    }
}

const newAnnotation = async(user,annotation,token) => {
    try {
        const result = await axios.post(`${url()}/user/new-annotation`, {
            data: {
                user: user,
                annotation: annotation
            }
        }, 
        {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })
        return result
    } catch {
        return null
    }
}

const getAnnotationsArticles = async (email,id,token) => {
    try {
        const result = await axios.get(`${url()}/user/get-annotations-articles`, {params: {
            email: email,
            id: id
        },
        headers: {
            "Authorization" : `Bearer ${token}`
        }})
        return result
    } catch {
        return null
    }
    
}

const updateAnnotationsArticles = async(annotationsArticles,user,token) => {
    try {
        const result = await axios.post(`${url()}/user/update-annotations-articles`, {
            data: {
                annotationsArticles: annotationsArticles,
                user: user
            }
        }, 
        {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })
        return result
    } catch {
        return null
    }
}

const getPosts = async (pagination) => {
    try {
        const result = await axios.get(`${url()}/get-posts`, {params: {
            pagination: pagination
        }})
        return result
    } catch {
        return null
    }
    
}

const getNewsComments = async (website) => {
    try {
        const result = await axios.get(`${url()}/get-posts-comments`, {params: {
            website: website
        }})
        return result
    } catch {
        return null
    }
    
}

const newNewsComment = async (user,website,content,token) => {
    try {
        const result = await axios.post(`${url()}/user/new-post-comment`, {
            data: {
                user: user,
                comment: {
                    website: website,
                    content: content
                }
            }
        }, 
        {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })
        return result
    } catch {
        return null
    }
}

export {newAccount,getAccounts,getAccount,newTransaction,getTransactions,deleteTransaction,
    deleteAccount,newTag,deleteTag,updateTransaction,getAccountsDetails,getAccountStatus,
    getAnnotations,deleteAnnotation,deleteAllAnnotations,newAnnotation,getAnnotationsArticles,
    updateAnnotationsArticles,getPosts,getNewsComments,newNewsComment}
