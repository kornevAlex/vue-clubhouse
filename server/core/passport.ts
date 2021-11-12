import passport from "passport";
import {Strategy as VKStrategy} from "passport-vkontakte";
import { User } from '../../models'
declare var process : {
    env: {
        VKONTAKTE_APP_ID: string,
        VKONTAKTE_APP_SECRET: string,
    }
  }

passport.use('vkontakte', new VKStrategy({
    clientID: process.env.VKONTAKTE_APP_ID, // VK.com docs call it 'API ID', 'app_id', 'api_id', 'client_id' or 'apiId'
    clientSecret: process.env.VKONTAKTE_APP_SECRET,
    callbackURL: "http://localhost:3001/auth/vkontakte/callback",
}, async function myVerifyCallbackFn(
    accessToken,
    refreshToken,
    params,
    profile,
    done
) {
    try {
        const obj = {
            fullName: profile.displayName,
            avatarUrl: profile.photos?.[0].value,
            isActive: 0,
            username: profile.username,
            phone: '',
        };
        const findUser = await User.findOne({
            where: {
                username: obj.username
            }
        });
        if(!findUser) {
            const profiles = await User.create(obj)
            return done(null, profiles.toJSON())
        }
        else {
            done(null, findUser)
        }
        
    } catch (error) {
        done(error)
    }
}
));
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err:any,user:any){
      err 
        ? done(err)
        : done(null,user);
    });
  });

export { passport }