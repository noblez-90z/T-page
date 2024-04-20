import "./terms.css";
import ellipse from "./image/Ellipse 12.svg";
import regtangle from "./image/heading box.svg";
import Layout from "./Layout";
const Terms = () => {
  return (
    <Layout>
      <div className="terms">
        <div className="terms-head">
          <h2>WEBSITE USAGE TERMS AND CONDITIONS</h2>
          <img src={regtangle} alt="" />
        </div>
        <div className="terms-main">
          <p>
            Welcome to my website. If you continue to browse and use this
            website, you are agreeing to comply with and be bound by the
            following terms and conditions of use, which together with my
            privacy policy govern Mytpage relationships with you in relation to
            this website. <br /> If you disagree with any part of these terms
            and conditions, please do not use my website. The term “Mytpage” or
            ‘me’ or ‘I’ refers to the owner of the website whose registered
            office ABCDEF
          </p>
          <div className="conditions">
            <div className="condition-head">
              <img src={ellipse} alt="" />
              <h3>
                THE USE OF THIS WEBSITE IS SUBJECT TO THE FOLLOWING TERMS OF
                USE:
              </h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ut bibendum euismod
              scelerisque ipsum magna eu neque odio. Suspendisse vel enim cursus
              odio. Suspendisse interdum leo nisl morbi nam at massa sed.
              Dignissim sodales at id diam cum aliquam. Accumsan massa volutpat
              nec rhoncus quam. Quam porttitor viverra dolor quam massa cras
              amet morbi. Netus amet vitae pharetra mauris adipiscing sed diam
              sed. Et curabitur tristique enim neque in quis a. Ut tellus amet
              sollicitudin gravida dignissim amet aenean eget. Amet justo hac
              aliquam phasellus orci quisque a cras felis. Mollis sociis quam
              nisl justo dui vitae at. Consequat quisque eu ante velit gravida
              tristique imperdiet vel amet. Tellus vel faucibus ut aliquam elit
              et aliquet sodales. Faucibus viverra praesent tristique porttitor
              nisi ac tincidunt ornare neque. Nec venenatis ornare netus
              tristique luctus nullam praesent. Senectus in tincidunt id semper
              nulla hendrerit nibh eu dictum. Ut dignissim ultrices odio
              malesuada in turpis at eu vulputate. Cursus sem ante eu sed
              malesuada. Magna duis sit elit etiam orci nam eleifend risus
              risus. Mi diam nec facilisis consequat aliquam ullamcorper gravida
              eget. Diam tincidunt sit aliquet leo id aenean magnis urna.
              Sagittis viverra morbi interdum nec morbi at venenatis tellus
              facilisis. Aliquam consequat sed tempor dignissim.Nulla fringilla
              iaculis nisi vitae sed eu. Metus cursus pellentesque nulla lacus
              pellentesque ac. A venenatis feugiat quis urna posuere urna.
              Molestie lacus tellus sed vulputate adipiscing quis etiam.
              Dignissim non accumsan maecenas vulputate ac imperdiet massa
              sagittis. Rhoncus facilisis morbi amet id justo ornare. Enim
              iaculis orci consectetur turpis massa lorem. Et commodo aliquam
              pellentesque tincidunt sollicitudin vitae aliquam natoque. Lectus
              vestibulum eleifend amet vitae nibh est. Neque volutpat aliquam
              magna dui nibh.
            </p>
          </div>
          <div className="conditions">
            <div className="condition-head">
              <img src={ellipse} alt="" />
              <h3>TERMS & CONDITIONS</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Quam non enim tortor
              hendrerit pellentesque turpis sed. Amet id tincidunt senectus
              nulla ipsum. Neque habitant non mattis sit. Rhoncus eget etiam
              diam blandit at risus nunc est. Sollicitudin in fringilla sed in
              quisque habitasse viverra senectus. Amet at cursus gravida
              sagittis. Ut posuere adipiscing in morbi aenean morbi nisl.
              Laoreet fermentum magnis egestas platea sit nibh congue est massa.
              Ac placerat auctor donec tincidunt tortor porttitor magna. Ac a
              donec augue quisque nulla platea pretium. Faucibus integer ornare
              quis sagittis at volutpat. Feugiat vitae egestas turpis feugiat
              nisi sapien nisi elementum. Euismod vestibulum eget iaculis in
              duis nisl. Id tempor tempus tristique facilisis tempus amet tortor
              potenti. Risus nunc arcu lectus volutpat nunc aliquet at sit. Eu
              sed non nulla eleifend tristique varius aliquam eleifend dolor.
              Amet iaculis ut at bibendum aliquam vitae.
            </p>
          </div>
          <div className="conditions">
            <div className="condition-head">
              <img src={ellipse} alt="" />
              <h3>​PAYMENTS, RETURNS / REFUND POLICY</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nunc congue leo elementum
              purus vestibulum. Ut pretium molestie facilisis massa diam.{" "}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
