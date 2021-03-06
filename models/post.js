// this will show what goes in the post - title, category, body use sequelize.define

module.exports = function (sequelize, DataTypes) {
    const Post = sequelize.define("Post", {
        
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        
        category: {
            type: DataTypes.STRING,
            defaultValue: "Discussion",
            allowNull: false,
            validate: {
                len: [1]
            }
        },
       
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
      
    });

    Post.associate = function (models) {
        // We're saying that a Post should belong to an neighbor
        // A Post can't be created without an neighbor due to the foreign key constraint
    Post.belongsTo(models.Neighbor, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Post;
};


// post should belong to an neighbor, can't be created without an neighbor because of foreign key restraint