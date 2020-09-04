import React, {useState, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import rocketIcon from '../../assets/images/icons/rocket.svg';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';
import {useHistory} from 'react-router-dom';

function TeacherForm  ( )  {


  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
      { week_day: 0, from: '', to: ''}
    ]);

  function addNewScheduleItem(){

    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: ''}

    ]);

   
  }

  function handleCreateClass(e: FormEvent){
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('Cadastro realizado com sucesso!');
      history.push('/');
    }).catch(() => {
      alert('Erro no cadastro!');
    });

  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {

      if(index === position){
        return {...scheduleItem, [field]: value};
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
    
  }
  //(12) 98135-6877

  function phoneFormat(n: string){
    var x = n.replace(/\D/g, '').match(/(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})/);
    return (!x![2] ? x![1] : '(' + x![1] + ')' + 
    ' ' + x![2] + ' ' +x![3] + ' ' +  (x![4] ? ' ' + x![4] : ''));
  }
  return   ( 
   
    <div id="page-teacher-form" className="container">
  <PageHeader title="Que incrível que você quer dar aulas!"
  description="O primeiro passo é preencher esse formulário de inscrição"
  pageTitle="Dar aulas"
  image={rocketIcon}
  imageText= {"Prepare-se!  \nvai ser o máximo!"}
  />
<form onSubmit={handleCreateClass}>
  <main>
    <fieldset>
      <legend>Seus dados</legend>
<div className="user-data">
  <div className="user-info">
  <img src="https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.0-1/p160x160/13615253_912784575513789_1088737632155292071_n.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=z-Vusu1X-x8AX_TIgyF&_nc_ht=scontent.fsjk1-1.fna&_nc_tp=6&oh=e23c85804b303472180be7498c48e6f3&oe=5F505410" alt="userImg"/>
  <p>Nome da Pessoa</p>
  </div>

  <Input id="phone"
        name="whatsapp" 
        label="WhatsApp"
        value={phoneFormat(whatsapp)}
        type="tel"
        placeholder="(    ) _  ____   ____"
        pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
        
        onChange={(e) => 
          setWhatsapp(e.target.value) }
              />
   
      
</div>
   
      <TextArea 
        name="bio" 
        label="Biografia"
        value={bio}
        onChange={(e) => {setBio(e.target.value)}}
      />
     
    </fieldset>

    <fieldset>
      <legend>Sobre a aula</legend>

      <Select 
      name="subject" 
      label="Matéria"
      value={subject}
      onChange={(e) => {setSubject(e.target.value)}}
      
      options={[
        {value: 'Artes', label: 'Artes'},
        {value: 'Psicologia', label: 'Psicologia'},
        {value: 'Matemática', label: 'Matemática'},
        {value: 'Química', label: 'Química'},
        {value: 'Educação Física', label: 'Educação Física'},
        {value: 'Física', label: 'Física'},
        {value: 'Ciências', label: 'Ciências'},
        {value: 'História', label: 'História'},
        {value: 'Portugês', label: 'Portugês'},
      
      ]}/>
      <Input 
        name="cost" 
        label="Custo da sua aula por hora"
        value={cost}
      onChange={(e) => {setCost(e.target.value)}}
        />
     
  
      </fieldset>
      <fieldset>
        <legend>Horários disponíveis

        <button type="button" onClick={addNewScheduleItem}>
          + Novo horário
        </button>
        </legend>

         {scheduleItems.map((scheduleItem,index) => {
           return (
            <div key={scheduleItem.week_day}className="schedule-item">
            <Select 
              name="week_day" 
              label="Dia da Semana"
              value={scheduleItem.week_day}
              onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
              options={[
                {value: '0', label: 'Domingo'},
                {value: '1', label: 'Segunda-Feira'},
                {value: '2', label: 'Terça-Feira'},
                {value: '3', label: 'Quarta-Feira'},
                {value: '4', label: 'Quinta-Feira'},
                {value: '5', label: 'Sexta-Feira'},
                {value: '6', label: 'Sábado'},
          ]}/>
          <Input 
            name="from" 
            label="Das" 
            type="time"
            value={scheduleItem.from}
             onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
            />
          <Input 
            name="to" 
            label="Até" 
            type="time"
            value={scheduleItem.to}
             onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
            />
            </div>
           );
         }) }
      
      </fieldset>

      <footer>
        <p><img src={warningIcon} alt="Aviso importante"/>
        Importante! <br />
        Preencha todos os dados!
        </p>
        <button type="submit">Salvar cadastro</button>
      </footer>
  </main>
  </form>
  </div>
  );
}

export default TeacherForm;